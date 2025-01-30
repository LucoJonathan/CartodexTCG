import styled from "styled-components";

export const DivFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    height: 60vh;
    background-color: rgba(173, 203, 219, 0.5);
    border-radius: 45px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    gap: 5vh;
`;

export const DivTitleForm = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

export const InputEmail = styled.input`
    padding: 1.5%;
    width: 70%;
    border-radius: 10px;
    border: none;
    font-size: larger;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const InputPassword = styled.input`
    padding: 1.5%;
    width: 70%;
    border-radius: 10px;
    border: none;
    font-size: larger;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ButtonConnect = styled.button`
    width: 15vw;
    height: 5vh;
    background-color: #50D9B0 ;
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DivLabel = styled.div`
        display: flex;
        gap: 6vw;
`;

export const LabelNav = styled.a`
    color: black;
`;