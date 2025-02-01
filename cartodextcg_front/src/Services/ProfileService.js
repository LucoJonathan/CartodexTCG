import { instance } from "./Axios.js";


const retrieveUserAllInfo = async (id) => {
    try {
        return await instance.get ( `/user/userDetails/${ id }` );
    } catch (error) {
        console.error ( "Récupération des données user impossible" + error );
        throw error;
    }
}


export const ProfileService = {
    retrieveUserAllInfo
};