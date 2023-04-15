import IGames from "types/IGames";
import { Div, BackgroundImage, DivText } from "./styles";

interface props{
    game: IGames
}

const SmallCardGames = ({ game }: props) => {
    return(
        <Div>
            <BackgroundImage style={{background: `url(${game.image}) no-repeat center`, backgroundSize: 'cover'}}></BackgroundImage>
            <DivText>
                <h2>{game.name}</h2>
            </DivText>
        </Div>
    )
}

export default SmallCardGames;