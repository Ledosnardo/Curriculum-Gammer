import UseBackground from 'state/hooks/UseBackground';
import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    align-items: center;
    background: no-repeat center url(${UseBackground});
    background-size: cover;
    box-shadow: 0 0 30px 10px black;

    section{
        width: 55%;
    }
`;

export const Title = styled.h1`
    margin-bottom: 50px;
    padding-left: 10px;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 300;
    letter-spacing: 2px;
    text-shadow: 0 1px 5px black;
`;

export const Form = styled.form`
    display: flex;
    background: #171a21;
    width: 100%;
    padding: 35px;
    border-radius: 2px;
    box-shadow: 0 0 1px 5px #171a21;
`;

export const SectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    width: 100%;
    text-transform: uppercase;
`;

export const SectionRight = styled.div`
    width: 40%;

    h3{
        color: #790000;
        font-size: .8em;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 3px;
    }

    img{
        width: 100%;
        border-radius: 5px;
    }

    h4{
        text-align: center;
        margin-top: 10px;
    }
`;

export const InputName = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px ;

    label{
        color: #790000;
        font-size: .8em;
        font-weight: 400;
    }
`;

export const InputPassWord = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px ;

    label{
        font-size: .8em;
    }
`;

export const Inputs = styled.input`
    margin-top: 3px;
    width: 100%;
    height: 6vh;
    border: none;
    border-radius: 2px;
    background-color: #32353c;
    color: #c5c3c0;
    padding: 10px;
    font-size: 1em;

    :focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    :disabled{
        opacity: 20%;
    }
`;

export const Button = styled.button`
    width: 60%;
    margin: 40px 20%;
    padding: 15px;
    background: linear-gradient(34deg, rgba(252,34,34,1) 0%, rgba(233,0,0,1) 46%, rgba(149,0,0,1) 100%, rgba(25,40,62,1) 152230%);   
    border: none;
    border-radius: 2px;
    color: white;
    font-weight: 400;
    font-size: 1.5em;
    cursor: pointer;
`;