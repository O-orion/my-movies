import { DivGrid, FeaturedMovie, HighlightsList } from "../styles/Components/DivGrid";
import { useMoviesStore } from "../store/movieStore";
import { useEffect } from "react";
import ListMovieFeatured from "./ListMovieFeatured";
import { Movie } from "../types/movie";

function FeaturedMoviesComponent() {
    const { movies, fetchMovies } = useMoviesStore();

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    // Verifique se há filmes disponíveis antes de tentar acessar o primeiro
    if (!movies || movies.length === 0) {
        return <div>Loading...</div>;
    }
    
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
        <DivGrid>
            <FeaturedMovie $imageUrl={`${IMAGE_BASE_URL}${movies[0].poster_path}`}></FeaturedMovie>
            <HighlightsList>
                {movies.slice(1, 4).map((movie) => (
                    <ListMovieFeatured key={movie.id} IMAGE_BASE_URL={IMAGE_BASE_URL} movie={movie as Movie} ></ListMovieFeatured>
                ))}
            </HighlightsList>
        </DivGrid>
    );
}


export default FeaturedMoviesComponent;