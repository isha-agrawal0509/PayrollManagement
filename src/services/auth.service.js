import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}login`, user);
    return response.data;
  } catch (err) {
    return { success: false, message: 'Error logging in' };
  }
};
