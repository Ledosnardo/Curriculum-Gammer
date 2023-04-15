import styled from "styled-components";

export const DivCards = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;

    .big-cards{
        display: flex;
        width: 50%;
        padding-right: 10px;
    }
    .small-cards{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;