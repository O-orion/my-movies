import { CardMovie, CardWrapper } from "../styles/Components/CardMovie";
import { Container } from "../styles/Components/Container";
import { TextMovieFeatured } from "../styles/Components/TextMovieFeatured";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


 function LatestReleases() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

    const data = [1,2,4,5,6]
    return(
      <>
      <TextMovieFeatured>Filmes Novos</TextMovieFeatured>
      <Container>
          <Slider  {...settings} slide="4" >
                  {data.map((value, index) => (
                    
                      <CardMovie>Filme {value}</CardMovie>
                    
                
                  ))}
          </Slider>
      </Container>
  </>
    )
 }

 export default LatestReleases;