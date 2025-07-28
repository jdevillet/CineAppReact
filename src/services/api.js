import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const api = async (query) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: API_KEY,
        include_adult: false,
        include_video: false,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default api;
