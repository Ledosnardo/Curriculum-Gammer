import GenresGames from "components/GenresGames";
import IGames from "types/IGames";

import { Div, BackgroundImage } from "./BigCardGamesStyles";
import { useNavigate } from "react-router-dom";

interface props{
    game: IGames
}

const  BigCardGames = ({ game }: props) => {
    const navigate = useNavigate();

    return(
        <Div>
            <BackgroundImage 
                style={{background: `url(${game?.image}) no-repeat center / cover`}}
                onClick={() => navigate(`/games/${game?.slug}`)}
            ></BackgroundImage>
            <div>
                <h2>{game?.name}</h2>
                <h3>Rating: {game?.rating}</h3>
                <GenresGames games={[game]}/>
            </div>
        </Div>
    )
}

export default BigCardGames;