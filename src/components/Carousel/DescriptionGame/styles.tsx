import styled from "styled-components";
import background from './background-texture-red.jpg';

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

