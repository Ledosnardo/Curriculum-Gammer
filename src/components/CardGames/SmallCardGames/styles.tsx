import styled from "styled-components";
import backgroundRed from '../background-texture-light-red.jpg';

export const Div = styled.div`
    width: 100%;
    height: 49%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 5px black;

    h2{
        text-align: center;
        margin: 0;
        padding: 10px 20px 0 0;
        font-size: 1.8em;
        text-shadow: 0 0 4px white;
        font-family: 'Sedgwick Ave Display', cursive;
        letter-spacing: 2px;
    }
`;

export const DivText = styled.div`
    width: 100%;
    background: url(${backgroundRed});
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
`;