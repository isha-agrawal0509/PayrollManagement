// src/components/Employee/SalarySlip.jsx
import React, { useState, useEffect } from "react";
import { getSalarySlips } from "../../services/employee.service";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { generatePDF } from "../../utils/pdfGenerator";
import "./SalarySlip.css";

const SalarySlip = () => {
  const { token } = useContext(AuthContext);
  const [salarySlips, setSalarySlips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const employeeId = "12345"; // Get from authenticated user context
    getSalarySlips(employeeId, token)
      .then((data) => {
        if (data.length === 0) {
          setError("No salary slips available.");
        } else {
          setSalarySlips(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching salary slips.");
        setLoading(false);
        console.error("Error fetching salary slips:", err);
      });
  }, [token]);

  if (loading) return <div className="loading-spinner">Loading...</div>;

  if (error) return <div className="error-message">{error}</div>;

  const handleDownloadPDF = (salarySlip) => {
    generatePDF(salarySlip); // Use your PDF generation function
  };

  return (
    <div className="salary-slip-container">
      <h2>Your Salary Slips</h2>
      {salarySlips.map((salarySlip) => (
        <div className="salary-slip" key={salarySlip.id}>
          <div>Month: {salarySlip.month}</div>
          <div>Year: {salarySlip.year}</div>
          <div>Amount: {salarySlip.amount}</div>
          <button onClick={() => handleDownloadPDF(salarySlip)}>Download PDF</button>
        </div>
      ))}
    </div>
  );
};

export default SalarySlip;
