import { instance } from "./Axios.js";


const login = async (formdata) =>{
    try {
        const response = await instance.post("/auth/login", {
            "email": formdata.email,
            "password": formdata.password
        } )
        // Vérifiez si la réponse contient un token
        if (response.data) {
            // Stockez le token dans la sessionStorage
            sessionStorage.setItem('token', response.data);
            console.log('Token stored in sessionStorage:', response.data);
        } else {
            console.error('No token received in the response');
        }

    }catch (error){
        console.log("Erreur lors de la connexion : " + error);
        throw error;
    }
}

export const LoginService = {
    login
};