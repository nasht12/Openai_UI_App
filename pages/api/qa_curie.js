const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const response = await openai.createCompletion({
    model: "text-curie-001",
    prompt: generatePrompt(req.body.input),
    // prompt:
    //   'Read the following material then answer the following questions and if you dont know the answer say, "I dont know the answer to the question":\n\n"""\nThe 2022 FIFA World Cup was the 22nd edition of the FIFA World Cup, an international football tournament contested by the mens national teams of FIFAs member associations. It took place in Qatar from 20 November to 18 December 2022, making it the first World Cup held in the Arab world and Muslim world, and the second held entirely in Asia after the 2002 tournament in South Korea and Japan.A France were the defending champions, having defeated Croatia 4–2 in the 2018 final. At an estimated cost of over $220 billion,2 it is currently the most expensive World Cup ever held; this figure is disputed by Qatari officials, including organising CEO Nasser Al Khater, who said the true cost is $8 billion, and other figures relate to overall infrastructure development since the World Cup was awarded to Qatar in 2010.3This tournament was the last with 32 participating teams, with the field set to increase to 48 teams for the 2026 edition. To avoid the extremes of Qatars hot climate,B the event was held during November and December.C It was held over a reduced time frame of 29 days with 64 matches played in eight venues across five cities. The Qatar national football team entered the event – their first World Cup – automatically as the hosts national team, alongside 31 teams who were determined by the qualification process. Qatar lost all three group matches; becoming the first hosts to lose every game, the earliest host nation eliminated,6 and the second host (after South Africa in 2010) not to progress past the first stage.7Argentina were the champions after winning the final against the title holder France 4–2 on penalties following a 3–3 draw after extra time. French player Kylian Mbappé became the first player to score a hat-trick in a World Cup final since Geoff Hurst in the 1966 final and won the Golden Boot as he scored the most goals (eight) during the tournament. Argentine captain Lionel Messi was voted the tournaments best player, winning the Golden Ball. Emiliano Martínez and Enzo Fernández, also from Argentina, won the Golden Glove, awarded to the tournaments best goalkeeper and the Young Player Award, awarded to the tournaments best young player, respectively.\n"""\n\nQuestions:\n1. Who won 2026 world cup?\n\nAnswers:\n',
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
  return `Answer the capital of the given country

Country: India
Capital: New Delhi
Country: USA
Capital: Washington DC
Country: ${input}
Capital:`;
}
