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

    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
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




   /* useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await ProfileService.retrieveUserAllInfo(decodedToken.id);
                setUserData(data); // On met les données dans l'état
            } catch (err) {
                setError("Impossible de récupérer les données utilisateur.");
            }
        };

        fetchUserData();
    }, [decodedToken.id]);
*/
   /* if (error) return <div>{error}</div>;*/
/*    if (!userData) return <div>Chargement...</div>;*/

    return (<>
        { (!userData  &&
            <>
            <DivFormProfile>
                <DivTitleProfile>fuqhgfiuzqgh{/*{ userData.username }*/}</DivTitleProfile>
                <DivInfoProfile>
                    <DivInfoLeft>
                        <DivInfoLeftCase>g
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder="NOM" /*value={userData.lastName}*/ readOnly={!isEditing}/>
                            </DivInfoNameProfile>
                            <DivInfoNameProfile>
                                <InputNameInfo placeholder="PRENOM" /*value={userData.firstName}*/ readOnly={!isEditing}/>
                            </DivInfoNameProfile>
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo placeholder="EMAIL" /*value={userData.email}*/ readOnly={!isEditing} />
                        </DivInfoLeftCase>
                        <DivInfoLeftCase>
                            <InputInfo  placeholder="TELEPHONE" /*value={userData.phone}*/ readOnly={!isEditing}/>
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
            </DivFormProfile>
        </>
        )}
    </>);
}