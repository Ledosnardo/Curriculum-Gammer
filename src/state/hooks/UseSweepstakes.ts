import { useRecoilValue, useSetRecoilState } from "recoil";
import { Games } from "state/atom";

export const UseRandomNumber = (num: number): number => {
    const raffle = Math.floor(Math.random() * num);
    return raffle;
}

export const UseGameSweepstakes = (num: number) => {
    const games = [];
    const gamesValue = useRecoilValue(Games)
    for(let i = 0; i < num; i++){
        const drawnNumber = UseRandomNumber(gamesValue.length)
        games.push(gamesValue.find((game, index) => index === drawnNumber))
    }
    return games;
}
