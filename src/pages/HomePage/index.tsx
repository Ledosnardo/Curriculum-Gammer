import { useRecoilValue } from "recoil"
import { Games } from "state/atom";
import HomePageHeader from "./Header";
import Carousel from "components/Carousel";
import { CarouselStyle } from "./style";
import FooterPage from "components/Footer";

const HomePage = () => {
    const games = useRecoilValue(Games);


    return(
        <>
            <HomePageHeader />
            <CarouselStyle>
                <h2>Destaques e recomendados</h2>
                <Carousel />
            </CarouselStyle>
            <FooterPage />
        </>
    )
}

export default HomePage