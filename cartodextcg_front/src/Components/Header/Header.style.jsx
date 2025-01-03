import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const DivHeader = styled.div`
    display: flex;
    max-height: 10vh;
    margin: 0;
    background-color: #7678db;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DivNav = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
`;

export const StyledIcon = styled ( FontAwesomeIcon )`
    color: white;
    font-size: 40px;
`;
export const DivUser = styled.div`margin-right: 1%;`;
export const DivHouse = styled.div``;
export const DivLogo = styled.div``;
export const Logo = styled.img`width: 10vh;`;