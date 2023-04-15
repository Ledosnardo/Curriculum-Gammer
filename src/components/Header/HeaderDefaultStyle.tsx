import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    background: linear-gradient(34deg, rgba(252,34,34,1) 0%, rgba(233,0,0,1) 46%, rgba(149,0,0,1) 100%, rgba(25,40,62,1) 152230%);    // background: linear-gradient(34deg, rgba(62,99,141,1) 0%, rgba(55,95,145,1) 46%, rgba(15,33,109,1) 100%);
    margin: 20px;
    border-radius: 2px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    padding: 10px;
    padding-right: 80px;

    h3{
        color: #c5c3c0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    // background: rgba(73, 165, 184, .2);
    background: rgba(0,0,0, .8);
    
    h3{
        color: rgba(255, 0, 0, 1);
        margin-left: 10px;
        padding: 0 10px;
        font-weight: bold;
    }
`;

export const Img = styled.img`
    width: 28px;
    height: 28px;
    // border-right: 3px solid rgba(73, 165, 184, 1);
    border-right: 3px solid #950000;
`;

export const DivInput = styled.div`
    margin: 0 15px;
    width: 30%;
    display: flex;
    align-items: center;
    background: rgba(0,0,0, .8);
    border: 1px solid rgba(0,0,0, .6);
    border-radius: 3px;

    span{
        position: relative;
        right: 0;
        font-size: 1.5em;
        padding: 5px 10px 0 0;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    display: block;
    padding: 10px;
    font-size: 1em;

    ::placeholder{
        padding: 20px;
        color: #c5c3c0;
        font-size: 1.2em;
    }

    :focus{
        outline: 0;
    }

    ::-webkit-search-cancel-button{
        display: none;
    }
`;