import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  params: { api_key: import.meta.env.VITE_APIKEY },
});

const fetchData = async (endpoint, params = {}) => {
  try {
    const { data } = await api.get(endpoint, { params });
    return data.results || data;
  } catch (error) {
    console.error("API Error:", error);
    return { results: [] };
  }
};

export const getMovieList = () => fetchData("/movie/popular");
export const searchMovie = (q) => fetchData("/search/movie", { query: q });
