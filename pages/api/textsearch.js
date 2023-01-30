const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log("121212");
  const response = await openai.createCompletion({
    model: "text-curie-001",
    prompt: generatePrompt(req.body.input),
    temperature: 0.1,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0.37,
    presence_penalty: 0,
    stop: ["\n\n"],
  });
  res.status(200).json({ result: response.data.choices[0].text });
}

function generatePrompt(input) {
  return `Return 10 random place in the world known for ${input}`;
}
