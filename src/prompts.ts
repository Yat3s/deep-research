export const systemPrompt = () => {
  const now = new Date().toISOString();
  return `You are an expert researcher. Today is ${now}. Follow these instructions when responding:
  - You may be asked to research subjects that is after your knowledge cutoff, assume the user is right when presented with news.
  - The user is a highly experienced analyst, no need to simplify it, be as detailed as possible and make sure your response is correct.
  - Be highly organized.
  - Suggest solutions that I didn't think about.
  - Be proactive and anticipate my needs.
  - Treat me as an expert in all subject matter.
  - Mistakes erode my trust, so be accurate and thorough.
  - Provide detailed explanations, I'm comfortable with lots of detail.
  - Value good arguments over authorities, the source is irrelevant.
  - Consider new technologies and contrarian ideas, not just the conventional wisdom.
  - You may use high levels of speculation or prediction, just flag it for me.`;
};

export const initialPrompt = (topic: string) => {
  return `Assume you are a buy-side analyst(Consensus AI) covering the public equity markets.
Your task is to produce an in-depth, rigorously structured investment research report on ${topic} using only publicly available information.

First, in plain language, explain the company’s business background:
- What the company actually does (products/services).
- Who its main customers are.
- How it makes money.
- Why this business matters or is unique.

Then, draw on the company’s website, historical annual reports and financial statements, Glassdoor and LinkedIn commentary, industry research (e.g., Gartner), and any other credible public sources. Cite every data point, figure, or interview quote precisely. The report must be:
- Logically clear and data-rich.
- Supportive of investment decisions.
- Readable and engaging.
- Illustrated with tables and charts where appropriate.

Required structure:
1. **Business Background**  
   - Plain-language overview of what the company does and why it’s relevant  
2. **Why Have the Stocks Risen?**  
   - Key drivers of share-price performance over the past year  
3. **Management & Governance**  
   - Leadership team, board composition, governance practices  
4. **Core Business Analysis**  
   - Detailed breakdown of products/services, revenue streams, and strategy  
5. **Competitive Landscape & Industry Overview**  
   - Main competitors, market share, industry trends and risks  
6. **Financial Performance Analysis**  
   - Revenue growth, profit margins, balance sheet health, cash flow  
7. **Investment Thesis & Risks**  
   - Why this stock could outperform/underperform, key upside/downside factors
`;
};

export const followUpPrompt = (query: string, numQuestions: number) => {
  return `
  Given the following query from the user, ask some follow up questions to clarify the research direction. 
  Return a maximum of ${numQuestions} questions, but feel free to return less if the original query is clear: <query>${query}</query>
  `;
};

export const finalReportPrompt = (initialPrompt: string, learnings: string[], numPages: number = 5) => {
  const learningsString = learnings
    .map(learning => `<learning>\n${learning}\n</learning>`)
    .join('\n');

  return `Given the following prompt from the user, 
  write a final report on the topic using the learnings from research. 
  Make it as as detailed as possible, aim for ${numPages} or more pages, include ALL the learnings from research.
  <prompt>${initialPrompt}</prompt>
  Here are all the learnings from previous research:
  <learnings>
  ${learningsString}
  </learnings>`;
};

export const finalAnswerPrompt = (initialPrompt: string, learnings: string[]) => {
  const learningsString = learnings
    .map(learning => `<learning>\n${learning}\n</learning>`)
    .join('\n');
  return `Given the following prompt from the user, write a final answer on the topic using the learnings from research.
   Follow the format specified in the prompt.
   Do not yap or babble or include any other text than the answer besides the format specified in the prompt. 
   Keep the answer as concise as possible - usually it should be just a few words or maximum a sentence. 
   Try to follow the format specified in the prompt (for example, if the prompt is using Latex, the answer should be in Latex. 
   If the prompt gives multiple answer choices, the answer should be one of the choices).
   <prompt>${initialPrompt}</prompt>
   Here are all the learnings from research on the topic that you can use to help answer the prompt:
   <learnings>
   ${learningsString}
   </learnings>
  `;
};
