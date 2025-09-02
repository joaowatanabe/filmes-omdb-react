import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_KEY;
const API_URL = "https://www.omdbapi.com/";

export const api = axios.create({
  baseUrl: API_URL,
  params: {
    apiKey: API_KEY,
  },
});
