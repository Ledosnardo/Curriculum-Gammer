import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(221,0,0,1) 0%, rgba(122,13,13,1) 38%, rgba(23,26,32,1) 100%, rgba(25,40,62,1) 152230%); 
    
    
    select{
        margin: 10px;
        padding: 5px 8px;
        border:none;
        border-radius: 2px;
        background: #171a21;
        color: #c5c3c0;
        font-size: 1em;
    }
    select:focus{
        outline: none;
    }

    .games{
        width: 60%;
        display: grid;
        grid-template-columns: auto auto;
    }
`;


export const Container = styled.div`
    width: 90%;
    background: #171a21;
    height: 100vh;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid #171a21;
    border-radius: 2px;
    box-shadow: 0 0 10px black;
    overflow: hidden;

    .link{
        textDecoration: none;
    }
`;
export const DivBackground = styled.div`
    width: 100%;
    height: 50vh;
`;

export const DivDescription = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    overflow: hidden;
    color: #c5c3c0;

    .name{
        font-size: 1.8em;
        text-transform: uppercase;
        width: 100%;
        height: 12vh;
        text-align: center;
        border-bottom: 1px dashed #c5c3c0;
        margin: 50px 0;
    }
    
    .genres{
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
    }

    .genres > div {
        width: 40%;
        margin-bottom: 10px;
        border-left: 1px dashed #c5c3c0;
        height: 20vh;
    }
`;

