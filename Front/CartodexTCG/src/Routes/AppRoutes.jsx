import { BrowserRouter , Route , Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login.jsx";

export const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<p>It"s works</p>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<p>Erreur 404</p>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};