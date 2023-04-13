import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    width: 80%;
    height: 60vh;
    margin-bottom: 10px;
`;

export const ButtonPass = styled.button`
    width: 6%;
    height: 200px;
    background: rgba(24,39,55, .3);
    margin: 2px;
    border: none;
    color: #c5c3c0;
    cursor: pointer;
`;

export const Div = styled.div`
    width: 100%;
    height: 100%;
    diplay: flex;
    align-items: center;
    jutify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 65% auto;
    box-shadow: 0 0 10px 2px black;
`;

export const MainPhoto = styled.div`
    box-shadow: 0 0 10px 2px black;
    height: 100%;
`;

export const DivButtons = styled.div`
    display: flex;
    justify-content: center;

    button{
        margin-left: 20px;
        width: 30px;
        height: 15px;
        background: rgba(197, 195, 192, .3);
        border:none;
        border-radius: 3px;
        cursor: pointer;
    }

    .buttonActive{
        background: rgba(197, 195, 192, 1);
    }

`;

