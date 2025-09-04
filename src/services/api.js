import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_KEY;
const API_URL = "https://www.omdbapi.com/";

export const api = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (query, page = 1) => {
  const response = await api.get("", {
    params: { s: query, page },
  });
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await api.get("", {
    params: { i: id, plot: "full" },
  });
  return response.data;
};
