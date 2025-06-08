import { sentiment } from "./comprehend.js";

async function main(texts) {
  for (const text of texts) {
    try {
      const result = await sentiment(text);
      console.log(`Text: "${text}"`);
      console.log("Sentiment:", result.sentiment);
      console.log("Sentiment Scores:", result.sentimentScore);
      console.log("---");
    } catch (err) {
      console.error(`Error processing "${text}":`, err);
    }
  }
}

const textsToAnalyze = [
  "Flowers, love and sunshine make a warm feeling in my soul.",
  "I feel hopeless because death and darkness rule this cursed land.",
];

main(textsToAnalyze);