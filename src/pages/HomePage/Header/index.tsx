import { UseGameSweepstakes } from "state/hooks/UseSweepstakes";
import { Header } from "./style";
import HeaderDefault from "components/Header";

const HomePageHeader = () => {
    const game = UseGameSweepstakes(1);

    return (
        <Header style={{ background: `url(${game[0]?.image}) no-repeat center / cover`, }}>
                <HeaderDefault />
        </Header>
    )
}

export default HomePageHeader;