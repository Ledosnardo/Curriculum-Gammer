import { useRecoilState, useRecoilValue } from "recoil";
import { ViewGamesPage } from 'state/atom';
import { UseGameSweepstakes } from "./UseSweepstakes";

export const UseGamesPage = () => {
    const [ viewGames, SetviewGames ] = useRecoilState(ViewGamesPage);

    const banner = UseGameSweepstakes(1);
    const cardGames = UseGameSweepstakes(4);
    const carousel = UseGameSweepstakes(5);
    
    if(viewGames.banner.length === 0){
        return () => {
            SetviewGames(() => {
                return {
                    'banner': [...banner],
                    'cardGames': [...cardGames],
                    'carousel': [...carousel]
                }
            })
        }
    } else { return () => {} }
}

export const GamesCarousel = () => {
    const viewGames = useRecoilValue(ViewGamesPage);

    return viewGames.carousel
}

export const GamesBanner = () => {
    const viewGames = useRecoilValue(ViewGamesPage);

    return viewGames.banner
}

export const GamesCardGames = () => {
    const viewGames = useRecoilValue(ViewGamesPage);

    return viewGames.cardGames
}