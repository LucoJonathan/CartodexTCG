import { BrowserRouter , Route , Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login.jsx";
import { Header } from "../Components/Header/Header.jsx";

export const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<p>It"s works</p>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<p>Erreur 404</p>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};