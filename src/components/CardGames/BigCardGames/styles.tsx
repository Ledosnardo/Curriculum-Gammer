import styled from "styled-components";
import backgroundRed from '../background-texture-light-red.jpg';

export const Div = styled.div`
    width: 50%;
    margin-left: 10px;
    height: 100%;
    background: blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background: url(${backgroundRed});
    box-shadow: 0 0 10px 5px black;

    h2{
        font-size: 2.5em;
        text-shadow: 0 0 4px white;
        font-family: 'Sedgwick Ave Display', cursive;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
`;