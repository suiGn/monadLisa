// monadsHandler.js
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const monadsHandler = async (req, res) => {
    // Example: Handle a POST request to create a thread or session
    if (req.url === '/create-session' && req.method === 'POST') {
        try {
            const thread = await openai.threads.create();
            res.json(thread);
        } catch (error) {
            console.error('Failed to create session:', error);
            res.status(500).send('Failed to create session');
        }
    } else if (req.url === '/send-message' && req.method === 'POST') {
        // Assuming req.body has been parsed and contains { threadId, message }
        const { threadId, message } = req.body;
        try {
            const response = await openai.threads.messages.create(threadId, {
                role: "user",
                content: message
            });
            res.json(response);
        } catch (error) {
            console.error('Failed to send message:', error);
            res.status(500).send('Failed to send message');
        }
    } else {
        res.send('Monads Handler reached without specific action');
    }
};
