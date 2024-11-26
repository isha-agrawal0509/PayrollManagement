import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { resetPasswordValidationSchema } from "../../utils/validation"; 
import "react-toastify/dist/ReactToastify.css";
import "./ResetPassword.css";

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordValidationSchema),
    });

    const [isPasswordReset, setIsPasswordReset] = useState(false);

    const onSubmit = (data) => {
        // Here you would update the password in the backend
        // For now, we'll mock the success response
        setIsPasswordReset(true);
        toast.success("Your password has been successfully reset.");
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>
            {!isPasswordReset ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" {...register("newPassword")} />
                        {errors.newPassword && <p className="error">{errors.newPassword.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" {...register("confirmPassword")} />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
            ) : (
                <p>Your password has been successfully reset. You can now login with your new password.</p>
            )}
            <ToastContainer />
        </div>
    );
};

export default ResetPassword;
