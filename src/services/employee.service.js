// src/services/employee.service.js
import axios from "axios";

const API_URL = "https://your-api.com/api"; // Replace with your actual API base URL

export const getEmployeeInfo = async (employeeId, token) => {
  try {
    const response = await axios.get(`${API_URL}/employee/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEmployeeInfo = async (employeeId, data, token) => {
  try {
    const response = await axios.put(`${API_URL}/employee/${employeeId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSalarySlips = async (employeeId, token) => {
  try {
    const response = await axios.get(`${API_URL}/salary-slips/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
