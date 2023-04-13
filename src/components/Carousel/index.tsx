import { UseGameSweepstakes } from "state/hooks/UseSweepstakes";
import { Main, MainPhoto, Div, Content, ButtonPass, DivButtons } from "./CarouselStyle";
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import IGames from "types/IGames";
import DescriptionGame from "./DescriptionGame";

const Carousel = () => {
    const [ carouselGame, setCarouselGame ] = useState(0)
    const games:IGames[] = UseGameSweepstakes(5);

    function changeGame(indexGame: number){
        return setCarouselGame(indexGame);
    }
    function changeGamePrev(): void{
        if(carouselGame === 0) {
            return setCarouselGame(games.length - 1)
        } else{
            return setCarouselGame(carouselGame - 1)
        }
    }
    function changeGameNext(): void{
        if(carouselGame === games.length -1){
            return setCarouselGame(0)
        } else{
            return setCarouselGame(carouselGame + 1)
        }
    }

    return(
        <>
            <Main>
                <ButtonPass onClick={() => changeGamePrev()}><span><SlArrowLeft size={50}/></span></ButtonPass>
                <Div>
                    <Content>
                        <MainPhoto style={{background: `url(${games[carouselGame]?.image}) no-repeat center`}}></MainPhoto>
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