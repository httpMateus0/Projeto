const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.AI_API_KEY
});

async function responder(mensagem) {

    const response = await client.responses.create({
        model: "gpt-5.6-luna",
        input: mensagem
    });

    return response.output_text;
}

module.exports = responder;