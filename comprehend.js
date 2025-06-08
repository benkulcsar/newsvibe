import {
  ComprehendClient,
  DetectSentimentCommand,
} from "@aws-sdk/client-comprehend";

/**
 * Determine sentiment of a given English text.
 *
 * @param {string} text
 */
export const sentiment = async (text) => {
  const comprehendClient = new ComprehendClient({});

  const detectSentimentCommand = new DetectSentimentCommand({
    Text: text,
    LanguageCode: 'en',
  });

  const { Sentiment, SentimentScore } = await comprehendClient.send(detectSentimentCommand);

  return {
    sentiment: Sentiment,
    sentimentScore: SentimentScore
  };
};