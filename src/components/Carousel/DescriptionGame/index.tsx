import IGames from "types/IGames";
import { MainDescription, Genres } from "./styles";

interface props{
    games: IGames[]
    carouselGame: number
}

const DescriptionGame = ({games, carouselGame}: props) => {
    const genresGame = games.find((game, index) => index === carouselGame)

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
                <Genres>
                    {genresGame?.genres.map(genre => {
                        return(
                            <div>
                                <h3>{genre.name}</h3>
                            </div>
                        )
                    })}
                </Genres>
                <h3>Raiting: {games[carouselGame]?.rating}</h3>
            </div>
        </MainDescription>
    )
}

export default DescriptionGame;