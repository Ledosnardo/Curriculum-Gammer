import IGames from "types/IGames";
import { Div, BackgroundImage, DivText } from "./SmallCardGamesStyles";
import { useNavigate } from "react-router-dom";

interface props{
    game: IGames
}

const SmallCardGames = ({ game }: props) => {
    const navigate = useNavigate();

    return(
        <Div>
            <BackgroundImage 
                style={{background: `url(${game?.image}) no-repeat center / cover`}}
                onClick={() => navigate(`/games/${game?.slug}`)}
            ></BackgroundImage>
            <DivText>
                <h2>{game?.name}</h2>
            </DivText>
        </Div>
    )
}

export default SmallCardGames;