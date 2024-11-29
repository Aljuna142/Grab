/*
import react form react;
import{useState} from react;
import 
import react from react;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list); // Fetching from the Redux store
    const loading = useSelector(state => state.administrators.loading);
    const error = useSelector(state => state.administrators.error); // Getting error state

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error if any
    }

    return (
        <div>
            <h2>Administrators</h2>
            <NavLink to="/dashboard/administrators/new">Add Administrator</NavLink>
            {administrators.length > 0 ? ( // Check if there are administrators
                <ul>
                    {administrators.map(admin => (
                        <li key={admin.id}>
                            <NavLink to={`/dashboard/administrators/${admin.id}`}>{admin.name}</NavLink>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No administrators found.</div> // Handle empty list
            )}
        </div>
    );
};

export default AdministratorList;*/
/*okay import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';
import './AdministratorList.css'; // Optional: Add CSS for styling

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list">
            <h2>Administrators</h2>
            <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th> {/* Changed to S.No }
                        <th>Name</th>
                        <th>Email</th> {/* Add other relevant headers }
                    </tr>
                </thead>
                <tbody>
                    {administrators.map((admin, index) => (
                        <tr key={admin.id}>
                            <td>{index + 1}</td> {/* Serial Number }
                            <td>
                                <NavLink to={`/dashboard/administrators/${admin.id}`}>
                                    {admin.name}
                                </NavLink>
                            </td>
                            <td>{admin.email || 'N/A'}</td> {/* Add other relevant data }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdministratorList;*/





/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';
import DashboardSidebar from "../dashboard/DashboardSidebar";

import './AdministratorList.css'; // Optional: Add CSS for styling

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="administrator-list-content"> {/* Wrapper for content }
                <h2>Administrators</h2>
                <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th> {/* Changed to S.No }
                            <th>Name</th>
                            <th>Email</th> {/* Add other relevant headers }
                        </tr>
                    </thead>
                    <tbody>
                        {administrators.map((admin, index) => (
                            <tr key={admin.id}>
                                <td>{index + 1}</td> {/* Serial Number }
                                <td>
                                    <NavLink to={`/dashboard/administrators/${admin.id}`}>
                                        {admin.name}
                                    </NavLink>
                                </td>
                                <td>{admin.email || 'N/A'}</td> {/* Add other relevant data }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdministratorList;*/


/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Importing DashboardSidebar
import './AdministratorList.css'; // Import your CSS

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="administrator-list-content"> {/* Content area }
                <div className="administrator-list">
                    <h2>Administrators</h2>
                    <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                    <div className="table-column">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {administrators.map((admin, index) => (
                                    <tr key={admin.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <NavLink to={`/dashboard/administrators/${admin.id}`}>
                                                {admin.name}
                                            </NavLink>
                                        </td>
                                        <td>{admin.email || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="other-column">
                        {/* Placeholder for additional content }
                        <h3>Other Content</h3>
                        <p>This is where other content can go.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdministratorList;*/

/*without api import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Importing DashboardSidebar
import './AdministratorList.css'; // Import your CSS

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="administrator-list-content"> {/* Content area }
                <div className="administrator-list">
                    <h2>Administrators</h2>
                    <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {administrators.map((admin, index) => (
                                <tr key={admin.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <NavLink to={`/dashboard/administrators/${admin.id}`}>
                                            {admin.name}
                                        </NavLink>
                                    </td>
                                    <td>{admin.email || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdministratorList;*/



/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Importing DashboardSidebar
import './AdministratorList.css'; // Import your CSS

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="administrator-list-content"> {/* Content area }
                <div className="administrator-list">
                    <h2>Administrators</h2>
                    <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {administrators.map((admin, index) => (
                                <tr key={admin._id}> {/* Changed to admin._id to match MongoDB ID }
                                    <td>{index + 1}</td>
                                    <td>
                                        <NavLink to={`/dashboard/administrators/${admin._id}`}>
                                            {admin.name}
                                        </NavLink>
                                    </td>
                                    <td>{admin.email || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdministratorList;*/
/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators } from '../../store/slices/administratorsSlice'; // Redux slice for fetching admins
import { NavLink } from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Importing DashboardSidebar
import './AdministratorList.css'; // Import your CSS

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="administrator-list-content"> {/* Content area }
                <div className="administrator-list">
                    <h2>Administrators</h2>
                    <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {administrators.map((admin, index) => (
                                <tr key={admin._id}> {/* Changed to admin._id to match MongoDB ID }
                                    <td>{index + 1}</td>
                                    <td>
                                        <NavLink to={`/dashboard/administrators/${admin._id}`}>
                                            {admin.name}
                                        </NavLink>
                                    </td>
                                    <td>{admin.email || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdministratorList;good but some edit n delte */


/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators, deleteAdministrator } from '../../store/slices/administratorsSlice'; // Redux slice
import { NavLink } from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Importing DashboardSidebar
import AdministratorForm from './forms/AdministratorForm'; // Import your form
import './AdministratorList.css'; // Import your CSS

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);
    const [selectedAdmin, setSelectedAdmin] = useState(null); // State for selected admin for editing
    const [showForm, setShowForm] = useState(false); // State to control the form visibility

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    const handleEditClick = (admin) => {
        setSelectedAdmin(admin);
        setShowForm(true); // Show the form for editing
    };

    const handleDeleteClick = (id) => {
        if (window.confirm('Are you sure you want to delete this administrator?')) {
            dispatch(deleteAdministrator(id));
        }
    };

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="administrator-list-content"> {/* Content area }
                <div className="administrator-list">
                    <h2>Administrators</h2>
                    <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th> {/* New column for actions }
                            </tr>
                        </thead>
                        <tbody>
                            {administrators.map((admin, index) => (
                                <tr key={admin._id}> {/* Changed to admin._id to match MongoDB ID }
                                    <td>{index + 1}</td>
                                    <td>
                                        <NavLink to={`/dashboard/administrators/${admin._id}`}>
                                            {admin.name}
                                        </NavLink>
                                    </td>
                                    <td>{admin.email || 'N/A'}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(admin)}>Edit</button>
                                        <button onClick={() => handleDeleteClick(admin._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {showForm && ( // Conditional rendering of the form
                    <AdministratorForm 
                        admin={selectedAdmin} 
                        onClose={() => {
                            setShowForm(false);
                            setSelectedAdmin(null); // Clear selected admin
                        }} 
                    />
                )}
            </div>
        </div>
    );
};

export default AdministratorList;*/



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministrators, deleteAdministrator } from '../../store/slices/administratorsSlice';
import { NavLink } from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import AdministratorForm from './forms/AdministratorForm';
import './AdministratorList.css';

const AdministratorList = () => {
    const dispatch = useDispatch();
    const administrators = useSelector(state => state.administrators.list);
    const loading = useSelector(state => state.administrators.loading);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchAdministrators());
    }, [dispatch]);

    const handleEditClick = (admin) => {
        setSelectedAdmin(admin);
        setShowForm(true); // Show the form for editing
    };

    const handleDeleteClick = (id) => {
        if (window.confirm('Are you sure you want to delete this administrator?')) {
            dispatch(deleteAdministrator(id));
        }
    };

    if (loading) {
        return <div>Loading administrators...</div>;
    }

    return (
        <div className="administrator-list-container">
            <DashboardSidebar />
            <div className="administrator-list-content">
                <div className="administrator-list">
                    <h2>Administrators</h2>
                    <NavLink to="/dashboard/administrators/new" className="add-button">Add Administrator</NavLink>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {administrators.map((admin, index) => (
                                <tr key={admin._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <NavLink to={`/dashboard/administrators/${admin._id}`}>
                                            {admin.name}
                                        </NavLink>
                                    </td>
                                    <td>{admin.email || 'N/A'}</td>
                                    <td>
                                        <button 
                                            className="edit-button" 
                                            onClick={() => handleEditClick(admin)}>Edit
                                        </button>
                                        <button 
                                            className="delete-button" 
                                            onClick={() => handleDeleteClick(admin._id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {showForm && (
                    <AdministratorForm 
                        admin={selectedAdmin} 
                        onClose={() => {
                            setShowForm(false);
                            setSelectedAdmin(null);
                        }} 
                    />
                )}
            </div>
        </div>
    );
};

export default AdministratorList;
