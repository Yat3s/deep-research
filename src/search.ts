import FirecrawlApp, { SearchResponse } from "@mendable/firecrawl-js";
import { generateObject } from "ai";
import { compact } from "lodash-es";
import { z } from "zod";
import { getModel, trimPrompt } from "./ai/providers";
import { processSearchResultPrompt, systemPrompt } from "./prompts";
import { log } from "./utils";

const SEARCH_LIMIT = 6;
const NUM_SERP_QUERIES = 4;
const NUM_LEARNINGS = 4;
const NUM_FOLLOW_UP_QUESTIONS = 3;

const firecrawl = new FirecrawlApp({
    apiKey: process.env.FIRECRAWL_KEY ?? '',
    apiUrl: process.env.FIRECRAWL_BASE_URL,
});

export async function search(query: string) {
    const result = await firecrawl.search(query, {
        timeout: 15000,
        limit: SEARCH_LIMIT,
        scrapeOptions: { formats: ['markdown'] },
    });

    return result;
}
// take en user query, return a list of SERP queries
export async function generateSerpQueries({
    query,
    numQueries = NUM_SERP_QUERIES,
    learnings,
}: {
    query: string;
    numQueries?: number;

    // optional, if provided, the research will continue from the last learning
    learnings?: string[];
}) {
    const res = await generateObject({
        model: getModel(),
        system: systemPrompt(),
        prompt: `Given the following prompt from the user, generate a list of SERP queries to research the topic. Return a maximum of ${numQueries} queries, but feel free to return less if the original prompt is clear. Make sure each query is unique and not similar to each other: <prompt>${query}</prompt>\n\n${learnings
            ? `Here are some learnings from previous research, use them to generate more specific queries: ${learnings.join(
                '\n',
            )}`
            : ''
            }`,
        schema: z.object({
            queries: z
                .array(
                    z.object({
                        query: z.string().describe('The SERP query'),
                        researchGoal: z
                            .string()
                            .describe(
                                'First talk about the goal of the research that this query is meant to accomplish, then go deeper into how to advance the research once the results are found, mention additional research directions. Be as specific as possible, especially for additional research directions.',
                            ),
                    }),
                )
                .describe(`List of SERP queries, max of ${numQueries}`),
        }),
    });
    log(`Created ${res.object.queries.length} queries`, res.object.queries);

    return res.object.queries.slice(0, numQueries);
}

export async function processSerpResult({
    query,
    result,
    numLearnings = NUM_LEARNINGS,
    numFollowUpQuestions = NUM_FOLLOW_UP_QUESTIONS,
}: {
    query: string;
    result: SearchResponse;
    numLearnings?: number;
    numFollowUpQuestions?: number;
}) {
    const contents = compact(result.data.map(item => item.markdown)).map(content =>
        trimPrompt(content, 80_000),
    );
    log(`Ran ${query}, found ${contents.length} contents`);

    const res = await generateObject({
        model: getModel(),
        abortSignal: AbortSignal.timeout(60_000),
        system: systemPrompt(),
        prompt: trimPrompt(processSearchResultPrompt(query, contents, numLearnings), 80_000),
        schema: z.object({
            learnings: z.array(z.string()).describe(`List of learnings, max of ${numLearnings}`),
            followUpQuestions: z
                .array(z.string())
                .describe(
                    `List of follow-up questions to research the topic further, max of ${numFollowUpQuestions}`,
                ),
        }),
    });
    log(`Created ${res.object.learnings.length} learnings`, res.object.learnings);

    return res.object;
}