import { generateObject } from 'ai';
import { z } from 'zod';

import { generateFeedbackModel } from './ai/providers';
import { followUpPrompt, systemPrompt } from './prompts';

export async function generateFollowUps({
  query,
  numQuestions = 3,
}: {
  query: string;
  numQuestions?: number;
}) {
  const userFeedback = await generateObject({
    model: generateFeedbackModel,
    system: systemPrompt(),
    prompt: followUpPrompt(query, numQuestions),
    schema: z.object({
      questions: z
        .array(z.string())
        .describe(
          `Follow up questions to clarify the research direction, max of ${numQuestions}`,
        ),
    }),
  });

  return userFeedback.object.questions.slice(0, numQuestions);
}
