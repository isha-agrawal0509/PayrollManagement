import './RemoveEmployee.css';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const RemoveEmployee = () => {
    const { id } = useParams();
    const history = useHistory();

    const handleRemoveEmployee = async () => {
        try {
            await axios.delete(`http://your-backend-url/employees/${id}`);
            console.log('Employee removed with ID:', id);
            history.push('/view-employee');  // Redirect to employee list after removal
        } catch (error) {
            console.error('Error removing employee:', error);
        }
    };

    return (
        <div className="remove-employee">
            <h2>Remove Employee</h2>
            <p>Are you sure you want to remove the employee with ID: {id}?</p>
            <button onClick={handleRemoveEmployee}>Yes, Remove</button>
        </div>
    );
};

export default RemoveEmployee;
