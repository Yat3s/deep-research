import * as fs from 'fs/promises';

import { log } from 'console';
import { getModel } from './ai/providers';
import {
  deepResearch,
} from './deep-research';
import { initialPrompt } from './prompts';
import { askQuestion, convertMarkdownToPdf, generateFollowUps, rl, writeFinalAnswer, writeFinalReport } from './utils';

const TOPIC = 'Rheinmetall';
const BREADTH = 6;
const DEPTH = 2;
const IS_REPORT = true;
const NUM_FOLLOW_UPS = 3;
const REPORT_PAGES = 8;

// run the agent
async function run() {
  console.log('Using model: ', getModel().modelId);

  // Get breath and depth parameters
  let queryPrompt = initialPrompt(TOPIC);
  let combinedQuery = queryPrompt;

  if (IS_REPORT) {
    log(`Creating research plan...`);

    // Generate follow-up questions
    const followUpQuestions = await generateFollowUps({
      query: queryPrompt,
      numQuestions: NUM_FOLLOW_UPS,
    });

    log(
      '\nTo better understand your research needs, please answer these follow-up questions:',
    );

    // Collect answers to follow-up questions
    const answers: string[] = [];
    for (const question of followUpQuestions) {
      const answer = await askQuestion(rl, `\n${question}\nYour answer: `);
      answers.push(answer);
    }

    // Combine all information for deep research
    combinedQuery = `
Initial Query: ${queryPrompt}
Follow-up Questions and Answers:
${followUpQuestions.map((q: string, i: number) => `Q: ${q}\nA: ${answers[i]}`).join('\n')}
`;
  }

  log('\nStarting research...\n');

  const { learnings, visitedUrls } = await deepResearch({
    query: combinedQuery,
    breadth: BREADTH,
    depth: DEPTH,
  });

  log(`\n\nLearnings:\n\n${learnings.join('\n')}`);
  log(`\n\nVisited URLs (${visitedUrls.length}):\n\n${visitedUrls.join('\n')}`);
  log('Writing final report...');

  if (IS_REPORT) {
    const report = await writeFinalReport({
      prompt: combinedQuery,
      learnings,
      visitedUrls,
      reportPages: REPORT_PAGES,
    });

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${TOPIC}-${timestamp}`;

    await fs.writeFile(`reports/markdown/${filename}.md`, report, 'utf-8');
    await convertMarkdownToPdf(report, `reports/${filename}.pdf`);
    console.log(`\nReport has been saved to ${filename}.pdf`);
  } else {
    const answer = await writeFinalAnswer({
      prompt: combinedQuery,
      learnings,
    });

    await fs.writeFile('answer.md', answer, 'utf-8');
    console.log(`\n\nFinal Answer:\n\n${answer}`);
    console.log('\nAnswer has been saved to answer.md');
  }

  rl.close();
}

run().catch(console.error);
