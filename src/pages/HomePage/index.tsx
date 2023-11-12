import { useEffect } from 'react';

import HomePageHeader from "./Header";
import Carousel from "components/Carousel";
import FooterPage from "components/Footer";
import CardGames from "components/CardGames";
import GameList from "components/GameList";

import { CarouselStyle, CardGamesStyles, Div } from "./style";
import { UseGamesPage } from 'state/hooks/UseGamesPage';

const HomePage = () => {
    const gamesPage = UseGamesPage()

    useEffect(() => {
        gamesPage()
    },[])

    return(
        <Div>
            <HomePageHeader />
            <CarouselStyle>
                <h2 className="title">Destaques e recomendados</h2>
                <Carousel/>
            </CarouselStyle>
            <CardGamesStyles>
                <h2 className="title">Games</h2>
                <CardGames/>
            </CardGamesStyles>
            <div>
                <h2 className="title">Lista de Jogos</h2>
                <GameList />
            </div>
            <FooterPage />
        </Div>
    )
}

export default HomePage