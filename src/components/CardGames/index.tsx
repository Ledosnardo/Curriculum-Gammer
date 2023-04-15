import IGames from "types/IGames";
import BigCardGames from "./BigCardGames";
import { UseGameSweepstakes } from "state/hooks/UseSweepstakes";
import { DivCards } from "./styles";
import SmallCardGames from "./SmallCardGames";

const CardGames = () => {
    const games:IGames[] = UseGameSweepstakes(4);


    return(
        <DivCards>
            <div className="big-cards">
                <BigCardGames game={games[0]}/>
                <BigCardGames game={games[1]}/>
            </div>
            <div className="small-cards">
                <SmallCardGames game={games[2]}/>
                <SmallCardGames game={games[3]}/>
            </div>
        </DivCards>
    )
}

export default CardGames;