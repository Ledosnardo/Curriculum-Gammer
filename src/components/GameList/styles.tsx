import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    background: linear-gradient(180deg, rgba(221,0,0,1) 0%, rgba(122,13,13,1) 38%, rgba(23,26,32,1) 100%, rgba(25,40,62,1) 152230%);    
`


export const Container = styled.div`
    width: 60%;
    background: #171a21;
    height: 25vh;
    margin: 16px;
    display: flex;
    align-items: center;
    border: 5px solid #171a21;
    border-radius: 2px;
    box-shadow: 0 0 10px #dd0000;
`;
export const DivBackground = styled.div`
    width: 40%;
    height: 100%;
`;

export const DivDescription = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    overflow: hidden;

    h2{
        font-size: 1.8em;
        padding: 20px 0;
        text-transform: uppercase;
    }
    
    .genres{
        width: 50%;
    }

    .genres > div{
        align-items: end;
        flex-direction: column;
    }
`;

