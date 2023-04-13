import styled from "styled-components";
import background from './background-texture.jpg';

export const MainDescription = styled.div`
    background: url(${background});  
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    h1{
        text-align: center;
        padding-top: 40px;
        font-size: 1.8em;
    }

    h3{
        text-align: center;
        padding-bottom: 10px;
    }

    .photos{
        display: grid;
        grid-template-columns: auto auto;
        margin: 0;
    }

    img{
        width: 100%;
        padding: 0 10px 10px 0;
        opacity: 80%
    }

`;

export const Genres = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        padding: 0px 10px;
        margin: 20px 20px;
        width: auto;
        height: auto;
        background: #394149;
        border-radius: 2px;
    }

    h3{
        padding: 2px;
    }
`;
