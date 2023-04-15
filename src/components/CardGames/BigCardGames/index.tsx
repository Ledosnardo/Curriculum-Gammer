import GenresGames from "components/GenresGames";
import IGames from "types/IGames";
import { Div, BackgroundImage } from "./styles";

interface props{
    game: IGames
}

const  BigCardGames = ({ game }: props) => {
    return(
        <Div>
            <BackgroundImage style={{background: `url(${game.image}) no-repeat center`, backgroundSize: 'cover'}}></BackgroundImage>
            <div>
                <h2>{game.name}</h2>
                <h3>Rating: {game.rating}</h3>
                <GenresGames games={[game]}/>
            </div>
        </Div>
    )
}

export default BigCardGames;