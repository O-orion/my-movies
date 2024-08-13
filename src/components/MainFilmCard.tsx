import { useEffect } from "react";
import { DivCard } from "../styles/Components/Div";
import { FeaturedMovie } from "../styles/Components/DivGrid";
import { DetailsMovieMain } from "../styles/Components/SectionDetailsMovieMain";
import { Titulo } from "../styles/Components/Titulo";
import { Props } from "../types/movie";
import { useMovieDetails } from "../store/movieStore";
import { TextDetailMovie } from "../styles/Components/TextDetailMovie";
import { DivTextDetails } from "../styles/Components/DivTextDetails";
import { TextOverView } from "../styles/Components/TextOverview";
import { ButtonWatchTrailler } from "../styles/Components/ButtonWatchTrailer";
import { IconPlay } from "../styles/Components/MovieDetailsCard";
import { BoxTextDestaque } from "../styles/Components/BoxTextDestaque";

function MainMovieCard({ movie, IMAGE_BASE_URL }: Props) {
    const { detailMovie, fetchMovie } = useMovieDetails()

    useEffect(() => {
       fetchMovie(movie.id)
    }, [fetchMovie, movie.id])

    function formatBudget(budget: number) {
        if (budget >= 1000000) {
            return `${(budget / 1000000).toFixed(1)} milhões`;
        } else if (budget >= 1000) {
            return `${(budget / 1000).toFixed(1)} mil`;
        }
        return budget;
    }

    function convertMinutesToHoursAndMinutes(totalMinutes: number) {
        const hours = Math.floor(totalMinutes / 60); // Inteiro da divisão, obtendo as horas
        const minutes = totalMinutes % 60; // Resto da divisão, obtendo os minutos restantes
        return `${hours}h ${minutes}m`;
    }

    return(
        <DivCard>
            <FeaturedMovie $imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`}></FeaturedMovie>
            <DetailsMovieMain>
                <BoxTextDestaque>
                <IconPlay className="material-symbols-outlined">local_fire_department</IconPlay>
                    
                    Em Destaque
                </BoxTextDestaque>
                <Titulo>{movie.title}</Titulo>
                <DivTextDetails>
                    <TextDetailMovie>{detailMovie?.budget ? formatBudget(detailMovie.budget) : ''} </TextDetailMovie>
                    <TextDetailMovie>{detailMovie?.runtime ? convertMinutesToHoursAndMinutes(detailMovie.runtime) : ''} </TextDetailMovie>
                    <TextDetailMovie>
                    {
                        detailMovie?.genres && (
                            <span>
                            {detailMovie.genres.map((genre) => (
                                    <span key={genre.id}>
                                        {genre.name},
                                    </span>
                                ))}
                            </span>
                        )
                    }
                    </TextDetailMovie>
                </DivTextDetails>
                <TextOverView>
                    {
                        detailMovie?.overview
                    }
                </TextOverView>
                <ButtonWatchTrailler width="25%">
                    Assitir ao Trailer
                    <IconPlay className="material-symbols-outlined">play_arrow</IconPlay>
                </ButtonWatchTrailler>
            </DetailsMovieMain>
        </DivCard>
    )
}

export default MainMovieCard;