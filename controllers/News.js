import NewsAPI from "newsapi";
import dotenv from "dotenv";

dotenv.config();

const newsapi = new NewsAPI(process.env.API_KEY);

const News = async (req, res) => {
  try {
    // Define your parameters
    const keywords = [
      "evs",
      "electric vehicles",
      "ev",
      "tesla",
      "rivian",
      "Lucid",
      "FISKER",
      "ev battery",
      "nio",
    ];

    // Using the 'everything' endpoint as an example
    const response = await newsapi.v2.everything({
      q: keywords,
      language: "en",
      sortBy: "publishedAt", // Sort by the most recent articles first
      //   page: 1, // Page number (optional)
    });

    if (response.status === "ok") {
      // Sending the articles in the response
      res.status(200).json({
        message: "News fetched successfully",
        articles: response.articles,
      });
    } else {
      // Handle unexpected response status
      res
        .status(500)
        .json({ message: "Failed to fetch news", status: response.status });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!", error: error.message });
  }
};

export default News;
