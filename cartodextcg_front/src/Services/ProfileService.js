import { instance } from "./Axios.js";


const retrieveUserAllInfo = async (id) => {
        try {
            const response = await instance.get(`/user/${id}`);
            return response.data;
        }catch(error){
            console.error("Récupération des données user impossible" + error);
            throw error;
        }
}


export const ProfileService = {
    retrieveUserAllInfo
};