import { Main, MainPhoto, Div, Content, ButtonPass, DivButtons } from "./CarouselStyle";
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import DescriptionGame from "./DescriptionGame";
import { Link } from "react-router-dom";
import { GamesCarousel } from "state/hooks/UseGamesPage";

const Carousel = () => {
    const [ carouselGame, setCarouselGame ] = useState(0)
    const games = GamesCarousel();

    function changeGame(indexGame: number): void{
        return setCarouselGame(indexGame);
    }
    function changeGamePrev(): void{
        if(carouselGame === 0) {
            return setCarouselGame(games.length - 1)
        }
        return setCarouselGame(carouselGame - 1)

    }
    function changeGameNext(): void{
        if(carouselGame === games.length -1){
            return setCarouselGame(0)
        }
        return setCarouselGame(carouselGame + 1)
    }

    return(
        <>
            <Main>
                <ButtonPass onClick={() => changeGamePrev()}><span><SlArrowLeft size={50}/></span></ButtonPass>
                <Div>
                    <Content>
                        <Link to={`/games/${games[carouselGame]?.slug}`}>
                            <MainPhoto style={{background: `url(${games[carouselGame]?.image}) no-repeat center / cover`}}></MainPhoto>
                        </Link>
                        <DescriptionGame games={games} carouselGame={carouselGame}/>
                    </Content>
                </Div>
                <ButtonPass onClick={() => changeGameNext()}><span><SlArrowRight size={50}/></span></ButtonPass>
            </Main>
            <DivButtons>
                {games.map((game, index) => {
                    return(
                        <button key={index}
                            onClick={() => changeGame(index)} 
                            className={index === carouselGame ? 'buttonActive' : ''}
                        ></button>
                    )
                })}
            </DivButtons>
        </>
    )
}

export default Carousel;