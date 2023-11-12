import IGames from "types/IGames";
import { Genres } from "./styles";
import SmallBox from "components/SmallBox";

interface props{
    games: IGames[] | IGames | undefined
    carouselGame?: number
}

const GenresGames = ({ games, carouselGame = 0 }: props) => {
    const genresGame = Array.isArray(games) ? games.find((game, index) => index === carouselGame) : games

    return (
    <Genres>
        {genresGame?.genres.map((genre, index) => {
            return(
                <div key={index}>
                    <SmallBox content={ genre?.name }/>
                </div>
            )
        })}
    </Genres>
    )
}

export default GenresGames;