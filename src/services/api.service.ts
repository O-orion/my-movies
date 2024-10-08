
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const fetchPopularMovies = async () => {
  const response = await api.get('/movie/popular');
  return response.data.results;
};

export const fetchDeatialsMovie =  async (id: number) => {
  const response = await api.get(`/movie/${id}`)
  return response.data;
}

export const fetchPopularMovie =  async () => {
  const response = await api.get(`/movie/popular`)
  return response.data
}
