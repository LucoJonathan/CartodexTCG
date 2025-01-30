import { instance } from "./Axios.js";



const login = async (formdata, authLogin) =>{

    try {
        const response = await instance.post("/auth/login", {
            "email": formdata.email,
            "password": formdata.password
        } )
        // Vérifiez si la réponse contient un token
        if (response.data) {
            const token = ({
                key: "token",
                value: response.data});
           authLogin(token)
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