import { instance } from "./Axios.js";


const retrieveUserAllInfo = async (id) => {
    const token = sessionStorage.getItem("token");
    try {
        const response = await instance.get(`/user/userDetails/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Si la réponse est réussie, tu retournes directement les données
        return response.data;

    } catch (error) {
        console.error("Récupération des données user impossible : " + error);
        throw error; // On relance l'erreur pour pouvoir la gérer dans le composant appelant si nécessaire
    }
}

export const ProfileService = {
    retrieveUserAllInfo
};
