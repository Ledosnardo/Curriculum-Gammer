import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: end;

    .content{
        background: linear-gradient(34deg, rgba(252,34,34,1) 0%, rgba(233,0,0,1) 46%, rgba(149,0,0,1) 100%, rgba(25,40,62,1) 152230%);    // background: linear-gradient(34deg, rgba(62,99,141,1) 0%, rgba(55,95,145,1) 46%, rgba(15,33,109,1) 100%);
        display: flex;
        align-items: end;
        padding: 20px;
        border-radius: 8px;
        height: 85%;
        box-shadow: 0 0 4px 1px black;
    }
`;

export const ImageProfile = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 50px;
    
    .image{
        position: relative;
        width: 250px;
        height: 250px;
        margin: 20px;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 0 0 4px 1px black;
    }

    .image span:first-of-type{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, transparent, rgba(255, 0, 0, 1));
        animation: animate1 .8s linear infinite;
    }
    @keyframes animate1{
        0%{
            transform: translateX(-100%)
        }
        100%{
            transform: translateX(100%)
        }
    }

    .image span:nth-of-type(2){
        position: absolute;
        top: 0;
        right: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(255, 0, 0, 1));
        animation: animate2 .8s linear infinite;
    }
    @keyframes animate2{
        0%{
            transform: translateY(-100%)
        }
        100%{
            transform: translateY(100%)
        }
    }

    .image span:nth-of-type(3){
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(to left, transparent, rgba(255, 0, 0, 1));
        animation: animate3 .8s linear infinite;
    }
    @keyframes animate3{
        0%{
            transform: translateX(100%)
        }
        100%{
            transform: translateX(-100%)
        }
    }

    .image span:last-of-type{
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to top, transparent, rgba(255, 0, 0, 1));
        animation: animate4 .8s linear infinite;
    }
    @keyframes animate4{
        0%{
            transform: translateY(100%)
        }
        100%{
            transform: translateY(-100%)
        }
    }

    img{
        width: 100%;
        height: 100%;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(0,0,0, .6);
    background: rgba(0,0,0, .8);
    text-align: center;
    font-size: 1em;
    color: #c5c3c0;
    border-radius: 4px;
    box-shadow: 0 0 4px 1px black;

    :focus{
        outline: none;
    }
`;

export const NickProfile = styled.div`
    width: 20%;
    height: 100%;
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: end;

    label{
        margin-bottom: 5px;
    }
`;

export const ButtonDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 50px;

    button{
        cursor: pointer;
        background: #c5c3c0;
        padding: 15px 25px;
        border: none;
        border-radius: 4px;
        font-size: 1em;
        letter-spacing: 1px;
    }

    button:hover{
        background: linear-gradient(34deg, rgba(252,34,34,1) 0%, rgba(233,0,0,1) 46%, rgba(149,0,0,1) 100%, rgba(25,40,62,1) 152230%);    // background: linear-gradient(34deg, rgba(62,99,141,1) 0%, rgba(55,95,145,1) 46%, rgba(15,33,109,1) 100%);
        box-shadow: 0 0 4px 1px black;
    }
`;