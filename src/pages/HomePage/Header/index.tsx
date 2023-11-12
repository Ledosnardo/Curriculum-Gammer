import { Header } from "./style";
import HeaderDefault from "components/Header";
import { GamesBanner } from "state/hooks/UseGamesPage";

const HomePageHeader = () => {
    const game = GamesBanner();

    return (
        <Header style={{ background: `url(${game[0]?.image}) no-repeat center / cover`, }}>
                <HeaderDefault />
        </Header>
    )
}

export default HomePageHeader;