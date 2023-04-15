import HomePageHeader from "./Header";
import Carousel from "components/Carousel";
import { CarouselStyle, CardGamesStyles } from "./style";
import FooterPage from "components/Footer";
import CardGames from "components/CardGames";
import GameList from "components/GameList";

const HomePage = () => {
    return(
        <>
            <HomePageHeader />
            <CarouselStyle>
                <h2>Destaques e recomendados</h2>
                <Carousel/>
            </CarouselStyle>
            <CardGamesStyles>
                <h2>Games</h2>
                <CardGames/>
            </CardGamesStyles>
            <GameList />
            <FooterPage />
        </>
    )
}

export default HomePage