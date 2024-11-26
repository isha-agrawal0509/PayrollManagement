import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import SalarySlip from "./components/Employee/SalarySlip";
import EmployeeInfo from "./components/Employee/EmployeeInfo";
import "./styles/main.css";

// Protected Route Component
const ProtectedRoute = ({ role, children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" />; // Redirect to login if not authenticated
    }

    if (user.role !== role) {
        return <Navigate to="/" />; // Redirect to login if role doesn't match
    }

    return children;
};

// Employee Layout Component
const EmployeeLayout = () => (
    <>
        <Outlet />
    </>
);

// Admin Layout Component
const AdminLayout = () => (
    <>
        <Outlet />
    </>
);

const App = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Employee Routes */}
            <Route
                path="/employee-dashboard"
                element={
                    <ProtectedRoute role="Employee">
                        <EmployeeLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="" element={<EmployeeDashboard />} />
                <Route path="employee-info" element={<EmployeeInfo />} />
                <Route path="salary-slip" element={<SalarySlip />} />
            </Route>

            {/* Admin Routes */}
            <Route
                path="/admin-dashboard"
                element={
                    <ProtectedRoute role="Admin">
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="" element={<AdminDashboard />} />
            </Route>

            {/* Catch-All Route */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default App;
