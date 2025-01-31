import { Navigate , Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ProtectedRoute = ({requiredRoles}) => {
    const token = sessionStorage.getItem("token");

    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    if (!token) {
        return <Navigate to="/" replace />;
    }

    // Décoder le token pour extraire les rôles
    const decodedToken = jwtDecode(token);
    const userRoles = decodedToken.roles; // Supposons que les rôles sont stockés dans le token sous la clé "roles"

    // Si des rôles sont requis, vérifiez que l'utilisateur a au moins un des rôles requis
    if (requiredRoles && !requiredRoles.some((role) => userRoles.includes(role))) {
        return <Navigate to="/home" replace />;
    }

    // Sinon, affichez la route demandée
    return <Outlet />;
};