import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DivFormProfile = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;
    height: 70vh;
    background-color: rgba(173, 203, 219, 0.5);
    border-radius: 45px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    gap: 1vh;
`;

export const DivTitleProfile = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 10%;
    font-size: xxx-large;
`;

export const DivInfoProfile = styled.div`
    margin: 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    height: 80%;// a changer ---------------------------------------
    
`;

export const DivInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    gap: 3%;
`;
export const DivInfoRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

export const DivModifyProfile = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10%;
`;

export const DivInfoLeftCase = styled.div`
    
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const DivInfoNameProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
`;

export const DivBottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    height: 100%;
    align-items: center;
`;

export const DivBottomModify = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 40%;
    height: 100%;
    align-items: center;
`;

export const ModifyIcon = styled( FontAwesomeIcon )`
color: white;
    width: 10%;
    height: 50%;
`;

export const InputNameInfo = styled.input`
    padding: 5%;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
`;

export const InputInfo = styled.input`
    display: flex;
    padding: 2%;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
`;

export const DivPicturePokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 90%;
    background-color: rgba(250, 235, 215, 0.5);
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const PicturePokemon = styled.img`
    height: 90%;
    width: 90%;
    border-radius: 4%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
`;