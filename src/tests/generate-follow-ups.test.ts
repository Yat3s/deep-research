import { generateFollowUps } from "../follow-ups";
import { initialPrompt } from "../prompts";

async function testFollowups() {
    let queryPrompt = initialPrompt("Microsoft");

    const followUpQuestions = await generateFollowUps({
        query: queryPrompt,
        numQuestions: 3,
    });

    console.log(followUpQuestions);
}

testFollowups(); 