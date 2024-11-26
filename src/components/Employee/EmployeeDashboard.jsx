// src/components/Employee/EmployeeDashboard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="employee-dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      {user ? (
        <>
          <div className="employee-info">
            <h3>Your Details</h3>
            <p>Name: {user.name}</p>
            <p>Employee ID: {user.employeeId}</p>
            <p>Department: {user.department}</p>
          </div>
          <div className="dashboard-actions">
            <Link to="/salary-slip">
              <button>View Salary Slip</button>
            </Link>
            <Link to="/employee-info">
              <button>Update Info</button>
            </Link>
            <button onClick={logout}>Logout</button>
          </div>
        </>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default EmployeeDashboard;
