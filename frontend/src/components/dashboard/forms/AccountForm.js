/*import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../../store/slices/accountsSlice';

// Make sure to set the app element for accessibility
Modal.setAppElement('#root');

const AccountForm = ({ isOpen, onRequestClose }) => {
    const dispatch = useDispatch();
    const [accountName, setAccountName] = useState('');
    const [accountType, setAccountType] = useState('asset');
    const [balance, setBalance] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = { accountName, accountType, balance };
        dispatch(addAccount(newAccount));
        onRequestClose(); // Close modal after submit
        setAccountName('');
        setBalance(0);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add New Account"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>Add New Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Account Name:</label>
                <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    required
                />
                <label>Account Type:</label>
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option value="asset">Asset</option>
                    <option value="liability">Liability</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label>Balance:</label>
                <input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(Number(e.target.value))}
                />
                <button type="submit">Add Account</button>
            </form>
        </Modal>
    );
};

export default AccountForm;*/



/*import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../../store/slices/accountsSlice';

// Make sure to set the app element for accessibility
Modal.setAppElement('#root');

const AccountForm = ({ isOpen, onRequestClose }) => {
    const dispatch = useDispatch();
    const [accountName, setAccountName] = useState('');
    const [accountType, setAccountType] = useState('asset');
    const [balance, setBalance] = useState(0);
    const [emiratesID, setEmiratesID] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = { accountName, accountType, balance, emiratesID, accountNumber };
        dispatch(addAccount(newAccount));
        onRequestClose(); // Close modal after submit
        setAccountName('');
        setBalance(0);
        setEmiratesID('');
        setAccountNumber('');
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add New Account"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>Add New Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Account Name:</label>
                <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    required
                />
                <label>Account Type:</label>
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option value="asset">Asset</option>
                    <option value="liability">Liability</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label>Balance:</label>
                <input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(Number(e.target.value))}
                    required
                />
                <label>Emirates ID:</label>
                <input
                    type="text"
                    value={emiratesID}
                    onChange={(e) => setEmiratesID(e.target.value)}
                    required
                />
                <label>Account Number:</label>
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                />
                <button type="submit">Add Account</button>
            </form>
        </Modal>
    );
};

export default AccountForm;*/

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../../store/slices/accountsSlice'; // No need to import fetchAccounts here

// Make sure to set the app element for accessibility
Modal.setAppElement('#root');

const AccountForm = ({ isOpen, onRequestClose, currentAccount, onAddAccount }) => {
    const dispatch = useDispatch();
    const [accountName, setAccountName] = useState(currentAccount ? currentAccount.accountName : '');
    const [accountType, setAccountType] = useState(currentAccount ? currentAccount.accountType : 'asset');
    const [balance, setBalance] = useState(currentAccount ? currentAccount.balance : 0);
    const [emiratesID, setEmiratesID] = useState(currentAccount ? currentAccount.emiratesID : '');
    const [accountNumber, setAccountNumber] = useState(currentAccount ? currentAccount.accountNumber : '');

    useEffect(() => {
        if (currentAccount) {
            setAccountName(currentAccount.accountName);
            setAccountType(currentAccount.accountType);
            setBalance(currentAccount.balance);
            setEmiratesID(currentAccount.emiratesID);
            setAccountNumber(currentAccount.accountNumber);
        } else {
            // Reset fields if creating a new account
            setAccountName('');
            setBalance(0);
            setEmiratesID('');
            setAccountNumber('');
        }
    }, [currentAccount]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = { accountName, accountType, balance, emiratesID, accountNumber };
        onAddAccount(newAccount); // Call the handler passed from Accounts
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add New Account"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>{currentAccount ? 'Edit Account' : 'Add New Account'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Account Name:</label>
                <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    required
                />
                <label>Account Type:</label>
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option value="asset">Asset</option>
                    <option value="liability">Liability</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label>Balance:</label>
                <input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(Number(e.target.value))}
                    required
                />
                <label>Emirates ID:</label>
                <input
                    type="text"
                    value={emiratesID}
                    onChange={(e) => setEmiratesID(e.target.value)}
                    required
                />
                <label>Account Number:</label>
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                />
                <button type="submit">{currentAccount ? 'Update Account' : 'Add Account'}</button>
            </form>
        </Modal>
    );
};

export default AccountForm;
