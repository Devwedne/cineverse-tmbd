import API_KEY from "../api/tmdb";
import api from "../api/tmdb";

export const getRequestToken = async () => {
  const res = await api.get(`/authentication/token/new?api_key=${API_KEY}`);
  return res.data.request_token;
};

export const validateLogin = async (username, password, request_token) => {
  const res = await api.post(
    `/authentication/token/validate_with_login?api_key=${API_KEY}`,
    {
      username,
      password,
      request_token,
    }
  );
  return res.data;
};

export const createSession = async (request_token) => {
  const res = await api.post(`/authentication/session/new?api_key=${API_KEY}`, {
    request_token,
  });
  return res.data.session_id;
};
