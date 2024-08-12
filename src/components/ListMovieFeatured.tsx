import { HighlightItem } from "../styles/Components/DivGrid";
import {
  ContainerRated,
  IconGrade,
  IconStar,
  RatedWrapper,
  TextRated,
} from "../styles/Components/Rated";
import { Props } from "../types/movie";
import ImageStar from "../assets/star.png";
import {
  ContainerDetailsMovie,
  IconPlay,
  TituleMovie,
} from "../styles/Components/MovieDetailsCard";
import { ButtonWatchTrailler } from "../styles/Components/ButtonWatchTrailer";

function ListMovieFeatured({ movie, IMAGE_BASE_URL }: Props) {
  return (
    <HighlightItem $imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`}>
      <ContainerRated>
        <RatedWrapper>
          <IconStar src={ImageStar}></IconStar>
          <TextRated>{movie.vote_average.toFixed(2)}</TextRated>
        </RatedWrapper>
        <IconGrade className="material-symbols-outlined">Star</IconGrade>
      </ContainerRated>

      <ContainerDetailsMovie>
        <TituleMovie>{movie.title}</TituleMovie>
        <ButtonWatchTrailler> Assitir ao Trailer
            <IconPlay className="material-symbols-outlined">play_arrow</IconPlay>
        </ButtonWatchTrailler>
      </ContainerDetailsMovie>
    </HighlightItem>
  );
}

export default ListMovieFeatured;
