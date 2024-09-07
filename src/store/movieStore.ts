import create from 'zustand';
import { fetchDeatialsMovie, fetchPopularMovies } from '../services/api.service';

type Movie = {
    id: number,
    title: string,
    poster_path: string,
}

type MovieDetails = {
    id: number,
    adult: false,
    budget: number,
    genres: any [],
    overview: string,
    popularity: number,
    release_date: string,
    runtime: 128
} 

type MoviesState = {
    movies: Movie[];
    fetchMovies: () => void;
}

type DetailMovie = {
    detailMovie: MovieDetails | null,
    fetchMovie: (id: number) => void;
}

type PopularMovie = {
    popularMovie: Movie[]
    fetchMovie: () => void
}

export const useMoviesStore = create<MoviesState>((set) => ({
    movies: [],
    fetchMovies: async () => {
        const movies = await fetchPopularMovies();
        set({ movies })
    }
}));

export const useMovieDetails =  create<DetailMovie> ((set) => ({
    detailMovie: null,
    fetchMovie: async (id: number) => {
        const detailMovie = await fetchDeatialsMovie(id)
        set({ detailMovie })
    }
}))

export const usePopularMovie = create<PopularMovie>((set) => ({
    popularMovie: [],
    fetchMovie: async () => {
        const popularMovie = await fetchPopularMovies()
        set({popularMovie})
    }
}))
