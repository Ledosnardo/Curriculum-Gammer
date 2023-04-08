import background from 'assets/backgrounds/background.jpg';
import background2 from 'assets/backgrounds/background-2.jpg';
import background3 from 'assets/backgrounds/background-3.jpg';
import background4 from 'assets/backgrounds/background-4.jpg';
import background5 from 'assets/backgrounds/background-5.jpg';
import { useMemo } from 'react';

const backgrounds = [background, background2, background3, background4, background5];


const UseBackground = () => {
    const raffle = Math.floor(Math.random() * backgrounds.length);
    const chosenBackground = useMemo(() => backgrounds.find((background, index) => index === raffle), []);
    return chosenBackground;
}

export default UseBackground;