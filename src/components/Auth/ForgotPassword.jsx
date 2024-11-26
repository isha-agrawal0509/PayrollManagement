import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { forgotPasswordValidationSchema } from "../../utils/validation"; 
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(forgotPasswordValidationSchema),
    });

    const [isEmailSent, setIsEmailSent] = useState(false);

    const onSubmit = (data) => {
        // Here you would send the reset password link to the provided email
        // For now, we'll mock the success response
        setIsEmailSent(true);
        toast.success("A reset password link has been sent to your email.");
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            {!isEmailSent ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <button type="submit">Send Reset Link</button>
                </form>
            ) : (
                <p>Check your email for the reset password link.</p>
            )}
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;
