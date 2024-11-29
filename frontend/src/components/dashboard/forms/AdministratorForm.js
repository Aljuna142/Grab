/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdministrator } from '../../../store/slices/administratorsSlice'; // Redux action

const AdministratorForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAdministrator({ name, email }));
    };

    return (
        <div>
            <h2>Add Administrator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdministratorForm;*/



/*good without toast import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdministrator } from '../../../store/slices/administratorsSlice'; // Redux action
import './AdministratorForm.css'; // Import CSS for styling

const AdministratorForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAdministrator({ name, email }));
        setName(''); // Clear the input after submission
        setEmail('');
    };

    return (
        <div className="administrator-form-container">
            <h2 className="form-title">Add Administrator</h2>
            <form className="administrator-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="form-input" 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="form-input" 
                    />
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AdministratorForm;*/




/*goodimport React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdministrator } from '../../../store/slices/administratorsSlice'; // Redux action
import { toast } from 'react-toastify'; // Import toast
import './AdministratorForm.css'; // Import CSS for styling

const AdministratorForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(addAdministrator({ name, email }));
        
        // Check if the action was fulfilled
        if (addAdministrator.fulfilled.match(resultAction)) {
            toast.success('Administrator added successfully!'); // Show success message
            setName(''); // Clear the input after submission
            setEmail('');
        } else {
            toast.error('Failed to add administrator.'); // Handle error
        }
    };

    return (
        <div className="administrator-form-container">
            <h2 className="form-title">Add Administrator</h2>
            <form className="administrator-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="form-input" 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="form-input" 
                    />
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AdministratorForm;good but som edit n delete*/


import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdministrator, editAdministrator } from '../../../store/slices/administratorsSlice'; // Import your actions

const AdministratorForm = ({ admin, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        if (admin) {
            setFormData({
                name: admin.name,
                email: admin.email,
            });
        }
    }, [admin]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (admin) {
            dispatch(editAdministrator({ id: admin._id, adminData: formData }));
        } else {
            dispatch(addAdministrator(formData));
        }
        onClose(); // Close the form after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                placeholder="Name" 
                required 
            />
            <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                placeholder="Email" 
                required 
            />
            <button type="submit">{admin ? 'Update' : 'Add'} Administrator</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
    );
};

export default AdministratorForm;
