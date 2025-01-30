import { instance } from "./Axios.js";


const register = async (formData) =>{
    try{
        const response = await instance.post("/user/register", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }catch(error){
        console.log("Erreur lors de l'inscription : " + error);
        throw error;
    }

}

// Assurez-toi que tu exportes bien la fonction register
export const RegisterService = {
    register  // L'exportation de la fonction register
};
