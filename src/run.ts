import * as fs from 'fs/promises';
import * as readline from 'readline';

import { getModel } from './ai/providers';
import {
  deepResearch,
  writeFinalAnswer,
  writeFinalReport,
} from './deep-research';
import { generateFeedback } from './feedback';

// Helper function for consistent logging
function log(...args: any[]) {
  console.log(...args);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to get user input
function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

const TOPIC = 'TransMedics';
const QUERY = `Assume you are a buy‑side analyst covering the public equity markets. Your task is to produce an in‑depth, rigorously structured investment research report on ${TOPIC} using only publicly available information. Draw on the company’s website, historical annual reports and financial statements, Glassdoor and LinkedIn commentary, industry research (e.g., Gartner), and any other credible public sources, and cite every data point, figure, or interview quote precisely. The report must be logically clear, data‑rich, and provide robust support for investment decisions. Maintain readability and, where appropriate, use tables and charts to present data.
Required structure and contents:
1. Why have stocks gone up so much over the past year?
2. Company background and management analysis
3. Core business analysis
4. Competitive landscape and industry overview
5. Financial performance analysis (including revenue growth and profit margins)`;
const BREADTH = 5;
const DEPTH = 3;
const IS_REPORT = true;
// run the agent
async function run() {
  console.log('Using model: ', getModel().modelId);

  // Get initial query
  const initialQuery = QUERY;

  // Get breath and depth parameters
  const breadth = BREADTH;
  const depth = DEPTH;
  const isReport = IS_REPORT;

  let combinedQuery = initialQuery;
  if (isReport) {
    log(`Creating research plan...`);

    // Generate follow-up questions
    const followUpQuestions = await generateFeedback({
      query: initialQuery,
    });

    log(
      '\nTo better understand your research needs, please answer these follow-up questions:',
    );

    // Collect answers to follow-up questions
    const answers: string[] = [];
    for (const question of followUpQuestions) {
      const answer = await askQuestion(`\n${question}\nYour answer: `);
      answers.push(answer);
    }

    // Combine all information for deep research
    combinedQuery = `
Initial Query: ${initialQuery}
Follow-up Questions and Answers:
${followUpQuestions.map((q: string, i: number) => `Q: ${q}\nA: ${answers[i]}`).join('\n')}
`;
  }

  log('\nStarting research...\n');

  const { learnings, visitedUrls } = await deepResearch({
    query: combinedQuery,
    breadth,
    depth,
  });

  log(`\n\nLearnings:\n\n${learnings.join('\n')}`);
  log(`\n\nVisited URLs (${visitedUrls.length}):\n\n${visitedUrls.join('\n')}`);
  log('Writing final report...');

  if (isReport) {
    const report = await writeFinalReport({
      prompt: combinedQuery,
      learnings,
      visitedUrls,
    });

    await fs.writeFile(`${TOPIC}.md`, report, 'utf-8');
    console.log(`\n\nFinal Report:\n\n${report}`);
    console.log(`\nReport has been saved to ${TOPIC}.md`);
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
