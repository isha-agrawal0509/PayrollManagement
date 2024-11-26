import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/view-employee">View Employees</Link>
                    </li>
                    <li>
                        <Link to="/add-employee">Add Employee</Link>
                    </li>
                    <li>
                        <Link to="/edit-employee">Edit Employee</Link>
                    </li>
                    <li>
                        <Link to="/remove-employee">Remove Employee</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
