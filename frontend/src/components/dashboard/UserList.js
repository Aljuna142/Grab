

/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../../store/slices/userSlice';
import './UserList.css';
import UserForm from './forms/UserForm';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    const [showModal, setShowModal] = useState(false);  // To toggle modal visibility
    const [editingUserId, setEditingUserId] = useState(null);  // Track the user being edited

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        setEditingUserId(null);  // Reset editing state
        setShowModal(true);  // Open modal for adding a new user
    };

    const handleEditUser = (id) => {
        setEditingUserId(id);
        setShowModal(true);  // Open modal for editing the user
    };

    const handleDeleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id)).then(() => dispatch(fetchUsers()));
        }
    };

    return (
        <div className="user-list-container">
            <h2>User Management</h2>
            <button className="btn-add-user" onClick={handleAddUser}>Add User</button>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn-edit" onClick={() => handleEditUser(user._id)}>Edit</button>
                                <button className="btn-delete" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <UserForm 
                            editingUserId={editingUserId} 
                            setShowModal={setShowModal} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;*/



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../../store/slices/userSlice';
import './UserList.css';
import UserForm from './forms/UserForm';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    const [showModal, setShowModal] = useState(false);  // To toggle modal visibility
    const [editingUserId, setEditingUserId] = useState(null);  // Track the user being edited

    useEffect(() => {
        dispatch(fetchUsers());  // Fetch all users when the component mounts
    }, [dispatch]);

    const handleAddUser = () => {
        setEditingUserId(null);  // Reset editing state
        setShowModal(true);  // Open modal for adding a new user
    };

    const handleEditUser = (id) => {
        setEditingUserId(id);  // Set the ID of the user being edited
        setShowModal(true);  // Open modal for editing the user
    };

    const handleDeleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id)).then(() => dispatch(fetchUsers()));  // Refetch users after delete
        }
    };

    return (
        <div className="user-list-container">
            <h2>User Management</h2>
            <button className="btn-add-user" onClick={handleAddUser}>Add User</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <table className="user-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn-edit" onClick={() => handleEditUser(user._id)}>Edit</button>
                                <button className="btn-delete" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <UserForm 
                            editingUserId={editingUserId} 
                            setShowModal={setShowModal} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;
