import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import { Routes, Route, BrowserRouter} from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./styles/main.css";
import { AuthProvider } from "./context/AuthContext";

// Create root and render only one BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    
    
  </React.StrictMode>
);
