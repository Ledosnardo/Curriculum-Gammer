import IGames from "types/IGames";
import { Container, ImagesDiv, ContentDiv } from "./GamePageStyle";
import { useState } from "react";
import SmallBox from "components/SmallBox";
import GenresGames from "components/GenresGames";

interface props{
    game: IGames | undefined 
}

const GamePage = ( { game }: props ) => {

    const imageStart = game?.screenShots[0].image;

    const [ imageMain, setImageMain ] = useState<string>(imageStart || '')

    return(
        <Container style={{ background: `url(${imageStart}) no-repeat`, backgroundSize: 'cover' }}>
            <div className="content">
                <ImagesDiv>
                    <div className="imageMain"><img src={imageMain}/></div>
                    <div className='imageSecondary'>
                        {game?.screenShots.map(image => {
                            return(
                                <img key={image.id} src={image.image}
                                    onClick={() => setImageMain(image.image)}
                                    className={imageMain === image.image ? 'active' : ''}
                                />
                            )
                        })}
                    </div>
                </ImagesDiv>
                <ContentDiv>
                    <div className="texts">
                        <h2>{game?.name}</h2>
                        <h4>Rating: {game?.rating}</h4>
                        <h4>Lançamento: {game?.released}</h4>
                    </div>
                    <h3>Sua nota:</h3>
                    <GenresGames games={ game }/>
                </ContentDiv>
            </div>
        </Container>
    )
}

export default GamePage;