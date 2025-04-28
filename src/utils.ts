import { generateObject } from 'ai';
import * as readline from 'readline';
import { z } from 'zod';
import { generateFeedbackModel, getModel, trimPrompt } from './ai/providers';
import { finalAnswerPrompt, finalReportPrompt, followUpPrompt, systemPrompt } from './prompts';
const markdownpdf = require('markdown-pdf');

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function askQuestion(rl: readline.Interface, query: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(query, answer => {
            resolve(answer);
        });
    });
}

// Helper function for consistent logging
export function log(...args: any[]) {
    console.log(...args);
}

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

export async function writeFinalReport({
    prompt,
    learnings,
    visitedUrls,
    reportPages = 4,
}: {
    prompt: string;
    learnings: string[];
    visitedUrls: string[];
    reportPages?: number;
}) {
    const res = await generateObject({
        model: getModel(),
        system: systemPrompt(),
        prompt: trimPrompt(finalReportPrompt(prompt, learnings, reportPages)),
        schema: z.object({
            reportMarkdown: z.string().describe('Final report on the topic in Markdown'),
        }),
    });

    // Append the visited URLs section to the report
    const urlsSection = `\n\n## Sources\n\n${visitedUrls.map(url => `- ${url}`).join('\n')}`;
    return res.object.reportMarkdown + urlsSection;
}

export async function writeFinalAnswer({
    prompt,
    learnings,
}: {
    prompt: string;
    learnings: string[];
}) {
    const res = await generateObject({
        model: getModel(),
        system: systemPrompt(),
        prompt: trimPrompt(finalAnswerPrompt(prompt, learnings)),
        schema: z.object({
            exactAnswer: z
                .string()
                .describe('The final answer, make it short and concise, just the answer, no other text'),
        }),
    });

    return res.object.exactAnswer;
}

export async function convertMarkdownToPdf(markdown: string, filename: string) {
    const path = require('path');
    const outputPath = filename;

    // 自定义CSS文件路径
    const cssPath = path.resolve(process.cwd(), 'src/styles/pdf.css');

    return new Promise<string>((resolve, reject) => {
        markdownpdf({
            cssPath: cssPath,
            paperFormat: 'A4',
            paperBorder: '1cm'
        })
            .from.string(markdown)
            .to(outputPath, (err: Error | null) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(outputPath);
            });
    });
}