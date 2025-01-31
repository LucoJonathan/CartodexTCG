import {
    DivBottomModify ,
    DivBottomProfile ,
    DivFormProfile ,
    DivInfoLeft , DivInfoLeftCase , DivInfoNameProfile ,
    DivInfoProfile ,
    DivInfoRight ,
    DivModifyProfile , DivPicturePokemon ,
    DivTitleProfile , InputInfo , InputNameInfo , ModifyIcon , PicturePokemon
} from "./Profile.style.jsx";
import { jwtDecode } from "jwt-decode";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


export const Profile = () => {

    const token = sessionStorage.getItem ( "token" );
    const decodedToken = {
        "id": jwtDecode ( token ).userId ,
        "roles": jwtDecode ( token ).roles ,
        "username": jwtDecode ( token ).username
    }

    const retrieveUserInfo = async () => {
        // récupération de l'ensembles des info du user avec l'id

    }

    useEffect ( () => {

    } , [] )

    return (<>
        { token &&
            <DivFormProfile>
                <DivTitleProfile>{ decodedToken.username }</DivTitleProfile>
                <DivInfoProfile>
                    <DivInfoLeft>
                        <DivInfoLeftCase>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder={ "NOM" }/>
                            </DivInfoNameProfile>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder={ "PRENOM" }/>
                            </DivInfoNameProfile>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo placeholder={ "EMAIL" }/>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo placeholder={ "PHONE" }/>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>{/*Ajouter Quelque chose ici plus tard*/}</DivInfoLeftCase>
                    </DivInfoLeft>
                    <DivInfoRight>
                        <DivPicturePokemon>
                            <PicturePokemon />
                        </DivPicturePokemon>
                    </DivInfoRight>
                </DivInfoProfile>
                <DivModifyProfile>
                    <DivBottomProfile>
                    </DivBottomProfile>
                    <DivBottomModify>
                        <ModifyIcon icon={ faPenToSquare }/>
                    </DivBottomModify>
                </DivModifyProfile>
            </DivFormProfile> }
    </>);
}