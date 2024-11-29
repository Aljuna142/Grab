/*import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addTransaction, editTransaction } from '../../../store/slices/transactionsSlice'; // Import actions

// Set the app element for accessibility
Modal.setAppElement('#root');

const TransactionForm = ({ isOpen, onRequestClose, currentTransaction }) => {
    const dispatch = useDispatch();
    const [transactionId, setTransactionId] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('income'); // Default to income
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTransaction) {
            setTransactionId(currentTransaction.transactionId);
            setAmount(currentTransaction.amount);
            setType(currentTransaction.type);
            setDate(new Date(currentTransaction.date).toISOString().split('T')[0]); // Format date for input
            setDescription(currentTransaction.description);
        } else {
            setTransactionId('');
            setAmount(0);
            setType('income');
            setDate('');
            setDescription('');
        }
    }, [currentTransaction]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = { transactionId, amount, type, date, description };
        
        if (currentTransaction) {
            await dispatch(editTransaction({ ...newTransaction, _id: currentTransaction._id }));
        } else {
            await dispatch(addTransaction(newTransaction));
        }

        onRequestClose(); // Close modal after submit
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Transaction Form"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>{currentTransaction ? 'Edit Transaction' : 'Add New Transaction'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Transaction ID:</label>
                <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    required
                />
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
                <label>Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <button type="submit">{currentTransaction ? 'Update Transaction' : 'Add Transaction'}</button>
            </form>
        </Modal>
    );
};

export default TransactionForm;*/



// src/components/dashboard/forms/TransactionForm.js
/*backend setup kaga waiting import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addTransaction, editTransaction } from '../../../store/slices/transactionsSlice'; // Import actions

// Set the app element for accessibility
Modal.setAppElement('#root');

const TransactionForm = ({ isOpen, onRequestClose, currentTransaction }) => {
    const dispatch = useDispatch();
    const [transactionId, setTransactionId] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('income'); // Default to income
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTransaction) {
            setTransactionId(currentTransaction.transactionId);
            setAmount(currentTransaction.amount);
            setType(currentTransaction.type);
            setDate(new Date(currentTransaction.date).toISOString().split('T')[0]); // Format date for input
            setDescription(currentTransaction.description);
        } else {
            setTransactionId('');
            setAmount(0);
            setType('income');
            setDate('');
            setDescription('');
        }
    }, [currentTransaction]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = { transactionId, amount, type, date, description };
        
        console.log('Submitting Transaction:', newTransaction); // Debugging

        if (currentTransaction) {
            await dispatch(editTransaction({ ...newTransaction, _id: currentTransaction._id }));
        } else {
            await dispatch(addTransaction(newTransaction));
        }

        onRequestClose(); // Close modal after submit
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Transaction Form"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>{currentTransaction ? 'Edit Transaction' : 'Add New Transaction'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Transaction ID:</label>
                <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    required
                />
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
                <label>Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <button type="submit">{currentTransaction ? 'Update Transaction' : 'Add Transaction'}</button>
            </form>
        </Modal>
    );
};

export default TransactionForm; backend setup kaga waiting*/


// src/components/dashboard/forms/TransactionForm.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addTransaction, editTransaction } from '../../../store/slices/transactionsSlice'; // Import actions

// Set the app element for accessibility
Modal.setAppElement('#root');

const TransactionForm = ({ isOpen, onRequestClose, currentTransaction }) => {
    const dispatch = useDispatch();
    const [transactionId, setTransactionId] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('income'); // Default to income
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTransaction) {
            setTransactionId(currentTransaction.transactionId);
            setAmount(currentTransaction.amount);
            setType(currentTransaction.type);
            setDate(new Date(currentTransaction.date).toISOString().split('T')[0]); // Format date for input
            setDescription(currentTransaction.description);
        } else {
            setTransactionId('');
            setAmount(0);
            setType('income');
            setDate('');
            setDescription('');
        }
    }, [currentTransaction]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = { transactionId, amount, type, date, description };

        console.log("Submitting Transaction:", newTransaction);
        
        if (currentTransaction) {
            await dispatch(editTransaction({ ...newTransaction, _id: currentTransaction._id }));
        } else {
            await dispatch(addTransaction(newTransaction));
        }

        onRequestClose(); // Close modal after submit
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Transaction Form"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>{currentTransaction ? 'Edit Transaction' : 'Add New Transaction'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Transaction ID:</label>
                <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    required
                />
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
                <label>Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <button type="submit">{currentTransaction ? 'Update Transaction' : 'Add Transaction'}</button>
            </form>
        </Modal>
    );
};

export default TransactionForm;
