import Footer from "components/Footer";
import GamePage from "pages/GamePageDefault/GamePage";
import  Header  from "components/Header";
import { useParams } from "react-router-dom";
import { FindGamePage } from "state/hooks/UseFindGame";
import { Div } from "./GamePageDefaultStyle";

const GamePageDefault = () => {
    const params = useParams().id;
    const game = FindGamePage(params);

    return(
        <Div>
            <Header />
            <GamePage game={ game }/>
            <Footer />
        </Div>
    )
}

export default GamePageDefault;