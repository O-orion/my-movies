import { CardMovie, CardWrapper } from "../styles/Components/CardMovie";
import { Container } from "../styles/Components/Container";
import { TextMovieFeatured } from "../styles/Components/TextMovieFeatured";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePopularMovie } from "../store/movieStore";
import { useEffect } from "react";
import { IconStar, RatedWrapper, TextRated } from "../styles/Components/Rated";
import ImageStar from "../assets/star.png";
import { TextDetailMovie } from "../styles/Components/TextDetailMovie";
import { ButtonWatchTrailler } from "../styles/Components/ButtonWatchTrailer";
import { IconPlay } from "../styles/Components/MovieDetailsCard";
import { BoxDetails } from "../styles/Components/BoxDetail";
import { ContainerSection } from "../styles/Components/ContainerSection";

function LatestReleases() {
  const { popularMovie, fetchMovie } = usePopularMovie();
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };


  return (
    <ContainerSection>
      <TextMovieFeatured>Filmes Novos</TextMovieFeatured>
      <Container>
        <Slider {...settings} slide="4">
          {popularMovie.map((value, index) => (
            <CardMovie
              key={index}
              image={`${IMAGE_BASE_URL}${value.poster_path}`}
            >
              <RatedWrapper  margin="5px" width="20%">
                <IconStar  src={ImageStar}></IconStar>
                <TextRated>7</TextRated>
              </RatedWrapper>

              <BoxDetails>
                <TextDetailMovie fontSize="13px" >{value.title}</TextDetailMovie>
                <ButtonWatchTrailler fontSize="12px" width="70%">
                      Assitir ao Trailer
                      <IconPlay className="material-symbols-outlined">play_arrow</IconPlay>
                  </ButtonWatchTrailler>
              </BoxDetails>
            </CardMovie>
          ))}
        </Slider>
      </Container>
    </ContainerSection>
  );
}

export default LatestReleases;
