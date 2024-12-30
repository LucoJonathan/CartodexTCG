import styled from "styled-components";

export const DivFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    height: 60vh;
    background-color: rgba(173, 203, 219, 0.5);
    border-radius: 45px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DivTitleForm = styled.div`
    font-size: 2rem;
    margin-top: 10vh;
    font-weight: bold;
`;

export const InputEmail = styled.input`
    padding: 1.5%;
    width: 70%;
    border-radius: 10px;
    border: none;
    margin-top: 5vh;
    font-size: larger;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const InputPassword = styled.input`
    padding: 1.5%;
    width: 70%;
    border-radius: 10px;
    border: none;
    margin-top: 5vh;
    font-size: larger;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ButtonConnect = styled.button`
    margin-top: 5vh;
    width: 10vw;
    height: 5vh;
    background-color: #50D9B0 ;
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;