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

    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

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

/*    const retrieveUserInfo = async () => {
        // récupération de l'ensembles des info du user avec l'id
       let response = ProfileService.retrieveUserAllInfo(decodedToken.id);
        setUserInfos({
            username : response.username,
            email : response.email,
            phone : response.phone,
            firstName: response.firstName,
            lastName : response.lastName
        })
    }*/

    useEffect(() => {
        ProfileService.retrieveUserAllInfo(decodedToken.id)
            .then((response) => {
                setUserInfos({
                    username: response.data.username || '',
                    email: response.data.email || '',
                    phone: response.data.phone || '',
                    firstName: response.data.firstName || '',
                    lastName: response.data.lastName || ''
                });
                setIsLoading(false);
            })
            .catch((e) => {
                console.error('Erreur lors de la récupération des informations utilisateur :', e);
            })
    }, [decodedToken.id]);

    return (<>
        {isLoading && <p>Chargement en cours...</p>}
        { (token && !isLoading) &&
            <DivFormProfile>
                <DivTitleProfile>{ userInfos.username }</DivTitleProfile>
                <DivInfoProfile>
                    <DivInfoLeft>
                        <DivInfoLeftCase>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder="NOM" value={userInfos.lastName} readOnly={!isEditing}/>
                            </DivInfoNameProfile>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder="PRENOM" value={userInfos.firstName} readOnly={!isEditing}/>
                            </DivInfoNameProfile>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo placeholder="EMAIL" value={userInfos.email} readOnly={!isEditing} />
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo  placeholder="TELEPHONE" value={userInfos.phone} readOnly={!isEditing}/>
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