// src/components/dashboard/forms/UserForm.js

/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser, fetchUserById } from '../../../store/slices/userSlice';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.users);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            dispatch(fetchUserById(id)).then(({ payload }) => {
                setFormData({ name: payload.name, email: payload.email });
            });
        }
    }, [id, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updateUser({ id, data: formData }));
        } else {
            dispatch(createUser(formData));
        }
        navigate('/users'); // Redirect to the user list after submission
    };

    return (
        <div>
            <h2>{id ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Update User' : 'Add User'}</button>
            </form>
        </div>
    );
};

export default UserForm;*/


/*// src/components/dashboard/UserForm.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser, fetchUserById } from '../../../store/slices/userSlice';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = () => {
    const { id } = useParams(); // Extract ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.users);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            // If there's an ID, we're in edit mode, so fetch the user by ID
            dispatch(fetchUserById(id)).then(({ payload }) => {
                setFormData({ name: payload.name, email: payload.email });
            });
        }
    }, [id, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            // If there's an ID, we're updating an existing user
            dispatch(updateUser({ id, data: formData }));
        } else {
            // Otherwise, create a new user
            dispatch(createUser(formData));
        }
        navigate('/users'); // Redirect to the user list after submission
    };

    return (
        <div>
            <h2>{id ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Update User' : 'Add User'}</button>
            </form>
        </div>
    ); 
};

export default UserForm;*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser, fetchUserById } from '../../../store/slices/userSlice';
import './UserForm.css';

const UserForm = ({ editingUserId, setShowModal }) => {
    const dispatch = useDispatch();
    
    // Local form state
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission

    // Fetch user data if editing
    useEffect(() => {
        if (editingUserId) {
            dispatch(fetchUserById(editingUserId)).then(({ payload }) => {
                setFormData({ name: payload.name, email: payload.email });
            });
        }
    }, [editingUserId, dispatch]);

    // Handle form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable form while submitting

        try {
            if (editingUserId) {
                await dispatch(updateUser({ id: editingUserId, data: formData }));
            } else {
                await dispatch(createUser(formData));
            }
            setShowModal(false); // Close modal after successful submit
        } catch (err) {
            console.error("Error during form submission:", err);
        } finally {
            setIsSubmitting(false); // Re-enable form after submission
        }
    };

    return (
        <div className="user-form-container">
            <h2>{editingUserId ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button 
                        type="submit" 
                        className="btn-submit" 
                        disabled={isSubmitting} // Disable button while submitting
                    >
                        {isSubmitting ? 'Submitting...' : (editingUserId ? 'Update User' : 'Add User')}
                    </button>
                    <button 
                        type="button" 
                        className="btn-cancel" 
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
