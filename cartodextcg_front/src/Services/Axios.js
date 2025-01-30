import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:9001/api',
    timeout: 10000,  // Temps d'attente de 10 secondes
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(
    function (config){
        // Récupération du token dans le sessionStorage
        const token = sessionStorage.getItem('token');
        if(token){
            // Ajoute le header Authorization si le token est présent
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function (error){
        // Gérer les erreurs avant que la requête ne soit envoyée
        return Promise.reject(error);
    }
)
