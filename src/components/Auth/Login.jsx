import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext"; 
import { loginValidationSchema } from "../../utils/validation"; 
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";


const Login = () => {
    const [role, setRole] = useState("Employee");
    const { login } = useAuth(); 
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidationSchema),
    });

    const onSubmit = (data) => {
        const isSuccess = login(data.email, data.password, role);

        if (isSuccess) {
            toast.success(`Logged in as ${role}`);
            if (role === "Employee") {
                window.location.href = "/employee-dashboard";
            } else {
                window.location.href = "/admin-dashboard";
            }
        } else {
            toast.error("Invalid email or password!");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="role-selector">
                    <label>
                        <input
                            type="radio"
                            value="Employee"
                            checked={role === "Employee"}
                            onChange={() => setRole("Employee")}
                        />
                        Employee
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Admin"
                            checked={role === "Admin"}
                            onChange={() => setRole("Admin")}
                        />
                        Admin
                    </label>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" {...register("email")} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" {...register("password")} />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
                <p style={{ marginTop: "10px" }}>
                    <a href="/forgot-password" style={{ color: "blue", textDecoration: "underline" }}>
                        Forgot Password?
                    </a>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
