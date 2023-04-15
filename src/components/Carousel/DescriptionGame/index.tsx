import IGames from "types/IGames";
import { MainDescription } from "./styles";
import GenresGames from "components/GenresGames";

interface props{
    games: IGames[]
    carouselGame: number
}

const DescriptionGame = ({games, carouselGame}: props) => {

    return(
        <MainDescription>
            <h1>{games[carouselGame]?.name}</h1>
            <div className="photos">
                <img src={`${games[carouselGame]?.screenShots[1].image}`} />
                <img src={`${games[carouselGame]?.screenShots[2].image}`} />
                <img src={`${games[carouselGame]?.screenShots[3].image}`} />
                <img src={`${games[carouselGame]?.screenShots[4].image}`} />
            </div>
            <div>
                <GenresGames games={games} carouselGame={carouselGame}/>
                <h3>Raiting: {games[carouselGame]?.rating}</h3>
            </div>
        </MainDescription>
    )
}

export default DescriptionGame;