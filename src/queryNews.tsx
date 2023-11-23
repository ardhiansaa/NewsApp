import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// Mengganti URL tetap dengan URL yang dinamis
const getNewsUrl = (query: string) =>
  `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=a3b3c67033654067ad569de67bcda5dd`;

type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export const useQueryNews = (query: string) => {
  const queryNews = async () => {
    try {
      const response = await axios.get<Response>(getNewsUrl(query));
      return response.data;
    } catch (error) {
      console.error("Error fetching headlines:", error);
      throw error;
    }
  };

  return useQuery<Response, AxiosError>(["headNews", query], queryNews, {
    refetchInterval: 2000,
  });
};
