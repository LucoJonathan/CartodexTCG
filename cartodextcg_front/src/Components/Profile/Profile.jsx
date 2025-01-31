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
import { useEffect , useState } from "react";
import { ProfileService } from "../../Services/ProfileService.js";


export const Profile = () => {

    const [userInfos, setUserInfos] = useState({
        username : "",
        email : "",
        phone : "",
        firstName: "",
        lastName : ""
    });

    const token = sessionStorage.getItem ( "token" );
    const decodedToken = {
        "id": jwtDecode ( token ).userId ,
    }

    const retrieveUserInfo = async () => {
        // récupération de l'ensembles des info du user avec l'id
       let response = ProfileService.retrieveUserAllInfo(decodedToken.id);
        setUserInfos({
            username : response.username,
            email : response.email,
            phone : response.phone,
            firstName: response.firstName,
            lastName : response.lastName
        })
    }

    useEffect ( () => {
        retrieveUserInfo()
    } , [] )

    return (<>
        { token &&
            <DivFormProfile>
                <DivTitleProfile>{ userInfos.username }</DivTitleProfile>
                <DivInfoProfile>
                    <DivInfoLeft>
                        <DivInfoLeftCase>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder={ "NOM" } value={userInfos.lastName}/>
                            </DivInfoNameProfile>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder={ "PRENOM" } value={userInfos.firstName}/>
                            </DivInfoNameProfile>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo placeholder={ "EMAIL" } value={userInfos.email}/>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo placeholder={ "PHONE" } value={userInfos.phone}/>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>{/*Ajouter quelque chose ici plus tard*/ }</DivInfoLeftCase>
                    </DivInfoLeft>
                    <DivInfoRight>
                        <DivPicturePokemon>
                            <PicturePokemon/>
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