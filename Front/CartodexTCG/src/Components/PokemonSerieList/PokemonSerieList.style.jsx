import styled from "styled-components";

export const ButtonCard = styled.button`
    display: flex;
    width: 150px;
    height: 150px;
    background-color: rgba(173, 203, 219, 0.8);
    border: none;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DivPokemonSeason = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5vh;
        width: 100vw;
`;

export const DivRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vw;
`;

export const PictureSeason = styled.img`
    width: 150px;
    max-height: 150px ;
`;