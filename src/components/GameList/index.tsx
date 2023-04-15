import { UseGameSweepstakes } from "state/hooks/UseSweepstakes";
import IGames from "types/IGames";
import { Container, Div, DivBackground, DivDescription } from "./styles";
import GenresGames from "components/GenresGames";

const GameList = () => {
    const games:IGames[] = UseGameSweepstakes(10);

    return (
        <Div>
            <h1>Lista de Jogos</h1>
            {games.map((game, index) => {
                return(
                    <Container key={index}>
                        <DivBackground style={{background: `url(${game.image}) no-repeat center`, backgroundSize: 'cover'}}></DivBackground>
                        <DivDescription>
                            <div>
                                <h2>{game.name}</h2>
                                <h3>Rating: {game.rating}</h3>
                            </div>
                            <div className="genres">
                                <GenresGames games={[game]}/>
                            </div>
                        </DivDescription>
                    </Container>
                )
            })}
        </Div>
    )
}

export default GameList