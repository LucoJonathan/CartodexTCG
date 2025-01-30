// AuthProvider.jsx
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!sessionStorage.getItem("token")
    );

    const authLogin = (token) => {
        sessionStorage.setItem("token", token.value);
        setIsAuthenticated(true);
    };

    const logout = () => {
        sessionStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, authLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // children doit être un nœud React et est obligatoire
};

export const useAuth = () => useContext(AuthContext);