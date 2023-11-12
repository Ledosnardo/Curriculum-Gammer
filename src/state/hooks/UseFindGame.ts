import { useRecoilValue } from "recoil";
import { Games } from "state/atom";
import IGames from "types/IGames";

export const FindGamePage = ( slug: string | undefined ): IGames | undefined => {
    const games = useRecoilValue(Games);
    const game = games.find(game => game.slug === slug);

    if(game){
        return game 
    } else{
        return 
    }
}