import { useRecoilValue } from "recoil"
import { Games } from "state/atom";
import HomePageHeader from "./Header";

const HomePage = () => {
    const games = useRecoilValue(Games);


    return(
        <HomePageHeader />
    )
}

export default HomePage