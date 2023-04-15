import IGames from "types/IGames";
import { Genres } from "./styles";

interface props{
    games: IGames[]
    carouselGame?: number
}

const GenresGames = ({ games, carouselGame = 0 }: props) => {
    const genresGame = games.find((game, index) => index === carouselGame)

    return (
    <Genres>
        {genresGame?.genres.map((genre, index) => {
            return(
                <div key={index}>
                    <h3>{genre.name}</h3>
                </div>
            )
        })}
    </Genres>
    )
}

export default GenresGames;