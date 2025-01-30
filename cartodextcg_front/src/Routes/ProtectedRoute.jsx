import { Navigate , Outlet } from "react-router-dom";

export const ProtectedRoute = ({requiredRole}) =>{
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    if(((!token)||(requiredRole && role !== requiredRole))){
        return <Navigate to="/" replace />;
    }
    return <Outlet/>
};