import FeaturedMoviesComponent from "../components/FeaturedMovies";
import LatestReleases from "../components/LatestReleases";
import MenuComponent from "../components/MenuComponent";

function Home() {
    return(
        <>
            <MenuComponent></MenuComponent>
            <FeaturedMoviesComponent></FeaturedMoviesComponent>
            <LatestReleases></LatestReleases>
        </>
    )
}

export default Home;