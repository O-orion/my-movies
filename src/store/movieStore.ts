import create from 'zustand';
import { fetchPopularMovies } from '../services/api.service';

type Movie = {
    id: number,
    title: string,
    poster_path: string,
}

type MoviesState = {
    movies: Movie[];
    fetchMovies: () => void;
}

export const useMoviesStore = create<MoviesState>((set) => ({
    movies: [],
    fetchMovies: async () => {
        const movies = await fetchPopularMovies();
        set({ movies })
    }
}));
