import './EditEmployee.css';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
    const { id } = useParams();
    const history = useHistory();
    const [employee, setEmployee] = useState({ name: '', position: '' });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://your-backend-url/employees/${id}`);
                setEmployee(response.data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleEditEmployee = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://your-backend-url/employees/${id}`, employee);
            console.log('Employee updated:', response.data);
            history.push('/view-employee');  // Redirect to employee list after update
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    return (
        <div className="edit-employee">
            <h2>Edit Employee</h2>
            <form onSubmit={handleEditEmployee}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={employee.name}
                        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                    />
                </div>
                <div>
                    <label>Position</label>
                    <input
                        type="text"
                        value={employee.position}
                        onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
                    />
                </div>
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
