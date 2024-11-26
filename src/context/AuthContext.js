import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth.service"; // Ensure these services are properly defined

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap the application
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store the current user
    const [token, setToken] = useState(localStorage.getItem("token")); // Get the token from localStorage
    const navigate = useNavigate(); // For navigation after login/logout

    // Login function
    const login = async (credentials) => {
        try {
            const response = await loginUser(credentials); // Call loginUser service
            setUser(response.user); // Set the user data
            setToken(response.token); // Set the token
            localStorage.setItem("token", response.token); // Store token in localStorage
            navigate("/dashboard"); // Navigate to the dashboard
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    // Logout function
    const logout = () => {
        setUser(null); // Clear user data
        setToken(null); // Clear the token
        localStorage.removeItem("token"); // Remove token from localStorage
        navigate("/login"); // Navigate to the login page
    };

    // Context value
    const value = {
        user,
        token,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
