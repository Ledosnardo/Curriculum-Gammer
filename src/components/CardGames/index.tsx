import BigCardGames from "./BigCardGames";
import SmallCardGames from "./SmallCardGames";

import { DivCards } from "./styles";
import { GamesCardGames } from "state/hooks/UseGamesPage";

const CardGames = () => {
    const games = GamesCardGames();

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