import OpenAI from "openai";

class Monad {
    constructor(apiKey, assistantId = null) {
        this.openai = new OpenAI({ apiKey: apiKey });
        this.assistantId = assistantId;
        console.log("Hello monads!");
        console.log("I am:", this.assistantId);
    }

    // Method for text completion
    async query(promptText, model = 'gpt-3.5-turbo', max_tokens = 150) {
        console.log("Preparing to query OpenAI with:", promptText);  // Pre-handle logging

        try {
            const completion = await this.openai.chat.completions.create({
                model: model,
                messages: [{ role: "user", content: promptText }],
                max_tokens: max_tokens
            });
            console.log("Received response from OpenAI");  // Post-process logging
            return completion.choices[0].message.content;
        } catch (error) {
            console.error("Error during OpenAI query:", error);
            throw error;  // Enhanced error handling
        }
    }

    // Method for listing assistants
    async listAssistants() {
        console.log("Listing assistants...");  // Pre-handle logging

        try {
            const myAssistants = await this.openai.assistants.list({
                order: "desc",
                limit: "20",
            });
            console.log("Received response from OpenAI: Assistants listed");  // Post-process logging
            return myAssistants.data;
        } catch (error) {
            console.error("Error during OpenAI list assistants query:", error);
            throw error;  // Enhanced error handling
        }
    }

    // Method for chat completions
    async chatCompletions(messages, model = 'gpt-3.5-turbo') {
        console.log("Generating chat completion...");  // Pre-handle logging

        try {
            const completion = await this.openai.chat.completions.create({
                model: model,
                messages: messages
            });
            console.log("Received response from OpenAI: Chat completion");  // Post-process logging
            return completion.choices[0].message.content;
        } catch (error) {
            console.error("Error during OpenAI chat completion query:", error);
            throw error;  // Enhanced error handling
        }
    }
}

export default Monad;
