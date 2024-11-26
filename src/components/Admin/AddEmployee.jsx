import './AddEmployee.css';
import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const handleAddEmployee = async (e) => {
        e.preventDefault();  // Prevent form from refreshing page on submit
        try {
            const response = await axios.post('http://your-backend-url/employees', { name, position });
            console.log('Employee added:', response.data);
            // Optionally, reset form after successful addition
            setName('');
            setPosition('');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div className="add-employee">
            <h2>Add Employee</h2>
            <form onSubmit={handleAddEmployee}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Position</label>
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
