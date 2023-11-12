import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 130vh;
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .content{
        width: 80%;
        height: 100%;
        display: flex;
        background: linear-gradient(34deg, rgba(252,34,34,1) 0%, rgba(233,0,0,1) 46%, rgba(149,0,0,1) 100%, rgba(25,40,62,1) 152230%);
        border-radius: 8px;
        box-shadow: 0 0 5px 1px black;
    }
`;

export const ImagesDiv = styled.div`
    width: 65%;
    height: 100%;

    .imageMain img{
        width: 100%;
        height: 70vh;
        border-radius: 8px;
    }

    .imageSecondary{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px;
    }
    .imageSecondary img{
        width: 15%;
        height: 10vh;
        margin: 4px;
        border-radius: 8px;
        cursor: pointer;
    }

    .active{
        border: 2px solid black;
        box-shadow: 0 0 7px 2px black;
    }
`;

export const ContentDiv = styled.div`
    width: 35%;
    height: 100%;

    .texts{
        padding: 8rem 0 4rem 0;
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .texts h2{
        text-align: center;
        width: 100%;
        font-size: 3em;
        font-family: 'Sedgwick Ave Display', cursive;
        padding-bottom: 2rem;
    }

    .texts h4{
        text-align: end;
        font-size: .8em;
        padding: 10px;
    }
`;