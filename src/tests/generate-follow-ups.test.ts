import { initialPrompt } from "../prompts";
import { generateFollowUps } from "../utils";

async function testFollowups() {
    let queryPrompt = initialPrompt("Microsoft");

    const followUpQuestions = await generateFollowUps({
        query: queryPrompt,
        numQuestions: 3,
    });

    console.log(followUpQuestions);
}

testFollowups(); 