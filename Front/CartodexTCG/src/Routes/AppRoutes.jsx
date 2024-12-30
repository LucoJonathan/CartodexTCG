import { BrowserRouter , Route , Routes } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<p>It"s works</p>}/>
                    <Route path="*" element={<p>Erreur 404</p>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};