import { BrowserRouter , Route , Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login.jsx";
import { Header } from "../Components/Header/Header.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { DivContent } from "./AppRoutes.style.jsx";

export const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <DivContent>
                    <Routes>
                        <Route path="/" element={<p>It"s works</p>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<p>Erreur 404</p>}/>
                    </Routes>
                </DivContent>
                <Footer/>
            </BrowserRouter>
        </>
    );
};