import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;


const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "pt-BR",
  }
});

export default api;
export { API_KEY, API_TOKEN };