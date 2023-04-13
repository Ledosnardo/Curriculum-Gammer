import { useRecoilValue } from "recoil";
import { Games } from "state/atom";
import { useMemo } from 'react';

export const UseRandomNumber = (num: number): number => {
    const raffle = Math.floor(Math.random() * num);
    return raffle;
}

export const UseGameSweepstakes = (num: number) => {
    const games: any = [];
    const gamesValue = useRecoilValue(Games)
    for(let i = 0; i < num; i++){
        const drawnNumber = UseRandomNumber(gamesValue.length)
        games.push(gamesValue.find((game, index) => index === drawnNumber))
    }
    return useMemo(() => games, []);
}
