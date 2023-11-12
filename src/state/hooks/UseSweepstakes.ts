import { useRecoilValue } from "recoil";
import { Games } from "state/atom";
import { useMemo } from 'react';
import shuffle from 'just-shuffle';

export const UseRandomNumber = (num: number): number => {
    const raffle = Math.floor(Math.random() * num);
    return raffle;
}

export const UseGameSweepstakes = (num: number) => {
    const gamesValue = useRecoilValue(Games);
    const games = shuffle(gamesValue).splice(0, num);

    return games;
}
