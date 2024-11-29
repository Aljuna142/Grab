import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts, editAccount, deleteAccount, addAccount } from '../../store/slices/accountsSlice'; // Import addAccount
import AccountForm from './forms/AccountForm';
import './Accounts.css';

const Accounts = () => {
    const dispatch = useDispatch();
    const { accounts, status } = useSelector((state) => state.accounts);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null); // For editing

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAccounts());
        }
    }, [status, dispatch]);

    const handleEdit = (account) => {
        setCurrentAccount(account);
        setIsModalOpen(true);
    };

    const handleDelete = (accountId) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            dispatch(deleteAccount(accountId));
        }
    };

    const handleAddAccount = (newAccount) => {
        dispatch(addAccount(newAccount)); // Add account directly
        setIsModalOpen(false); // Close modal after submission
    };

    return (
        <div className="accounts-container">
            <h1 className="accounts-title">Manage Accounts</h1>
            <button className="accounts-add-button" onClick={() => {
                setCurrentAccount(null); // Clear current account for adding
                setIsModalOpen(true);
            }}>
                Add New Account
            </button>
            <AccountForm 
                isOpen={isModalOpen} 
                onRequestClose={() => setIsModalOpen(false)} 
                currentAccount={currentAccount} // Pass current account to form
                onAddAccount={handleAddAccount} // Pass the handler
            />

            {/* Accounts Table */}
            <table className="accounts-table">
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Emirates ID</th>
                        <th>Account Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account._id}>
                            <td>{account.accountName}</td>
                            <td>{account.accountType}</td>
                            <td>{account.balance}</td>
                            <td>{account.emiratesID}</td>
                            <td>{account.accountNumber}</td>
                            <td>
                                <button className="accounts-edit-button" onClick={() => handleEdit(account)}>Edit</button>
                                <button className="accounts-delete-button" onClick={() => handleDelete(account._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Accounts;
