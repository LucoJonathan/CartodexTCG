import styled from "styled-components";

export const DivFormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

export const DivFormRegisterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 60vw;
    height: 50vh;
    border-radius: 45px;
    margin: auto;
    background-color: rgba(173, 203, 219, 0.5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    width: 50%;
    height: 60%;
`;

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    width: 50%;
    height: 60%;
`;

export const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 100%;
    gap: 5%;
`;

export const InputRegister = styled.input`
    padding: 2%;
    width: 70%;
    border-radius: 10px;
    border: none;
    font-size: larger;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ButtonRegister = styled.button`
    width: 15vw;
    height: 5vh;
    background-color: #50D9B0 ;
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const LabelRegister = styled.h1`
    display: flex;
    align-items: center;
    font-size: xx-large;
    height: 5vh;
`;

export const DivError = styled.div`
    display: flex;
    align-items: center;
    height: 5px;
`;

export const LabelError = styled.label`
    color: red;
`;