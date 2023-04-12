import background from 'assets/backgrounds/background.jpg';
import background2 from 'assets/backgrounds/background-2.jpg';
import background3 from 'assets/backgrounds/background-3.jpg';
import background4 from 'assets/backgrounds/background-4.jpg';
import background5 from 'assets/backgrounds/background-5.jpg';
import background6 from 'assets/backgrounds/background-6.jpg';
import background7 from 'assets/backgrounds/background-7.jpg';
import { useMemo } from 'react';
import { UseRandomNumber } from './UseSweepstakes';

const backgrounds = [background, background2, background3, background4, background5, background6, background7];

const UseBackground = () => {
    const raffle = UseRandomNumber(backgrounds.length);
    const chosenBackground = useMemo(() => backgrounds.find((background, index) => index === raffle), []);
    return chosenBackground;
}

export default UseBackground;