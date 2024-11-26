// src/components/Employee/EmployeeInfo.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeInfoValidationSchema } from "../../utils/validation";
import { getEmployeeInfo, updateEmployeeInfo } from "../../services/employee.service";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./EmployeeInfo.css";

const EmployeeInfo = () => {
  const { token } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
    resolver: yupResolver(employeeInfoValidationSchema),
  });

  useEffect(() => {
    const employeeId = "12345"; // Get from authenticated user context
    setLoading(true);
    getEmployeeInfo(employeeId, token)
      .then((data) => {
        reset(data); // Populate the form with fetched data
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch employee data.");
        setLoading(false);
      });
  }, [reset, token]);

  const onSubmit = (data) => {
    updateEmployeeInfo("12345", data, token)
      .then(() => {
        alert("Profile updated successfully!");
        setIsEditMode(false);
      })
      .catch((err) => {
        setError("Failed to update profile.");
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="employee-info-container">
      <h2>Employee Information</h2>
      {!isEditMode ? (
        <div>
          <p>Name: {setValue("name")}</p>
          <p>Email: {setValue("email")}</p>
          <p>Contact: {setValue("contact")}</p>
          <p>Department: {setValue("department")}</p>
          <button onClick={() => setIsEditMode(true)}>Edit Info</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name:</label>
            <input type="text" {...register("name")} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input type="email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div>
            <label>Contact:</label>
            <input type="text" {...register("contact")} />
            {errors.contact && <p className="error">{errors.contact.message}</p>}
          </div>
          <div>
            <label>Department:</label>
            <input type="text" {...register("department")} />
            {errors.department && <p className="error">{errors.department.message}</p>}
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditMode(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default EmployeeInfo;
