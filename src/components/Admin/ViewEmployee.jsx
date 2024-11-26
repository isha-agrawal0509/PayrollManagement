import React from 'react';
import './ViewEmployee.css';
import { Link } from 'react-router-dom';

const ViewEmployee = () => {
    const employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Product Manager' },
    ];

    return (
        <div className="view-employee">
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.position}</td>
                            <td>
                                <Link to={`/edit-employee/${emp.id}`}>Edit</Link> |{' '}
                                <Link to={`/remove-employee/${emp.id}`}>Remove</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewEmployee;
