// src/components/dashboard/Transactions.js
/*import React from 'react';
import './Transactions.css'; // Importing the CSS file

const Transactions = () => {
    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <h1 className="transactions-title">Transactions Management</h1>
                <button className="add-transaction-button">Add Transaction</button>
            </div>
            <table className="transaction-list">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example transaction item, replace with dynamic data }
                    <tr className="transaction-item">
                        <td>1</td>
                        <td>2024-10-25</td>
                        <td>$100.00</td>
                        <td>Completed</td>
                        <td>
                            <button className="edit-button">Edit</button>
                            <button className="delete-button">Delete</button>
                        </td>
                    </tr>
                    {/* More transaction items will go here }
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;*/

/*// src/components/dashboard/Transactions.js
import React, { useState, useEffect } from 'react';
import './Transactions.css'; // Importing the CSS file
import TransactionForm from './forms/TransactionForm'; // Import TransactionForm component
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../store/slices/transactionsSlice'; // Import fetch action

const Transactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions); // Fetch transactions from Redux store
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    // Fetch transactions on component mount
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    const handleAddTransactionClick = () => {
        setCurrentTransaction(null); // Clear current transaction for adding new
        setIsModalOpen(true); // Open modal
    };

    const handleEditTransactionClick = (transaction) => {
        setCurrentTransaction(transaction); // Set current transaction for editing
        setIsModalOpen(true); // Open modal
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close modal
        setCurrentTransaction(null); // Reset current transaction
    };

    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <h1 className="transactions-title">Transactions Management</h1>
                <button className="add-transaction-button" onClick={handleAddTransactionClick}>
                    Add Transaction
                </button>
            </div>
            <table className="transaction-list">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr className="transaction-item" key={transaction._id}>
                            <td>{transaction.transactionId}</td>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td>{transaction.type}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditTransactionClick(transaction)}>
                                    Edit
                                </button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Transaction Form Modal }
            <TransactionForm 
                isOpen={isModalOpen} 
                onRequestClose={handleModalClose} 
                currentTransaction={currentTransaction} 
            />
        </div>
    );
};

export default Transactions;*/


// src/components/dashboard/Transactions.js
/*backend setup kaga waiting import React, { useState, useEffect } from 'react';
import './Transactions.css'; // Importing the CSS file
import TransactionForm from './forms/TransactionForm'; // Import TransactionForm component
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../store/slices/transactionsSlice'; // Import fetch action

const Transactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions); // Fetch transactions from Redux store
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    // Fetch transactions on component mount
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    const handleAddTransactionClick = () => {
        setCurrentTransaction(null); // Clear current transaction for adding new
        setIsModalOpen(true); // Open modal
    };

    const handleEditTransactionClick = (transaction) => {
        setCurrentTransaction(transaction); // Set current transaction for editing
        setIsModalOpen(true); // Open modal
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close modal
        setCurrentTransaction(null); // Reset current transaction
    };

    console.log('Transactions:', transactions); // Debugging

    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <h1 className="transactions-title">Transactions Management</h1>
                <button className="add-transaction-button" onClick={handleAddTransactionClick}>
                    Add Transaction
                </button>
            </div>
            <table className="transaction-list">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr className="transaction-item" key={transaction._id}>
                            <td>{transaction.transactionId}</td>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td>{transaction.type}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditTransactionClick(transaction)}>
                                    Edit
                                </button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Transaction Form Modal }
            <TransactionForm 
                isOpen={isModalOpen} 
                onRequestClose={handleModalClose} 
                currentTransaction={currentTransaction} 
            />
        </div>
    );
};

export default Transactions;backend setup kaga waiting*/

// src/components/dashboard/Transactions.js
/*import React, { useState, useEffect } from 'react';
import './Transactions.css'; // Importing the CSS file
import TransactionForm from './forms/TransactionForm'; // Import TransactionForm component
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../store/slices/transactionsSlice'; // Import fetch action

const Transactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions); // Fetch transactions from Redux store
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    // Fetch transactions on component mount
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    useEffect(() => {
        console.log("Transactions:", transactions);
    }, [transactions]);

    const handleAddTransactionClick = () => {
        setCurrentTransaction(null); // Clear current transaction for adding new
        setIsModalOpen(true); // Open modal
    };

    const handleEditTransactionClick = (transaction) => {
        setCurrentTransaction(transaction); // Set current transaction for editing
        setIsModalOpen(true); // Open modal
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close modal
        setCurrentTransaction(null); // Reset current transaction
    };

    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <h1 className="transactions-title">Transactions Management</h1>
                <button className="add-transaction-button" onClick={handleAddTransactionClick}>
                    Add Transaction
                </button>
            </div>
            <table className="transaction-list">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr className="transaction-item" key={transaction._id}>
                            <td>{transaction.transactionId}</td>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td>{transaction.type}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditTransactionClick(transaction)}>
                                    Edit
                                </button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Transaction Form Modal }
            <TransactionForm 
                isOpen={isModalOpen} 
                onRequestClose={handleModalClose} 
                currentTransaction={currentTransaction} 
            />
        </div>
    );
};

export default Transactions;*/



// src/components/dashboard/Transactions.js
import React, { useState, useEffect } from 'react';
import './Transactions.css'; // Importing the CSS file
import TransactionForm from './forms/TransactionForm'; // Import TransactionForm component
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../store/slices/transactionsSlice'; // Import fetch action

const Transactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions); // Fetch transactions from Redux store
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    // Sample data to display if no transactions are fetched
    const sampleTransactions = [
        { _id: '1', transactionId: 'T001', amount: 200, type: 'income', date: '2024-10-25', description: 'Sale' },
        { _id: '2', transactionId: 'T002', amount: 150, type: 'expense', date: '2024-10-26', description: 'Purchase' },
        { _id: '3', transactionId: 'T003', amount: 300, type: 'income', date: '2024-10-27', description: 'Consulting' },
        { _id: '4', transactionId: 'T004', amount: 50, type: 'expense', date: '2024-10-28', description: 'Supplies' },
        { _id: '5', transactionId: 'T005', amount: 450, type: 'income', date: '2024-10-29', description: 'Freelance Work' },
        { _id: '6', transactionId: 'T006', amount: 100, type: 'expense', date: '2024-10-30', description: 'Marketing' },
        { _id: '7', transactionId: 'T007', amount: 200, type: 'income', date: '2024-10-31', description: 'Sale' },
        { _id: '8', transactionId: 'T008', amount: 150, type: 'expense', date: '2024-11-01', description: 'Purchase' },
        { _id: '9', transactionId: 'T009', amount: 300, type: 'income', date: '2024-11-02', description: 'Consulting' },
        { _id: '10', transactionId: 'T010', amount: 50, type: 'expense', date: '2024-11-03', description: 'Supplies' },
    ];

    // Fetch transactions on component mount
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    useEffect(() => {
        console.log("Transactions:", transactions);
    }, [transactions]);

    const handleAddTransactionClick = () => {
        setCurrentTransaction(null); // Clear current transaction for adding new
        setIsModalOpen(true); // Open modal
    };

    const handleEditTransactionClick = (transaction) => {
        setCurrentTransaction(transaction); // Set current transaction for editing
        setIsModalOpen(true); // Open modal
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close modal
        setCurrentTransaction(null); // Reset current transaction
    };

    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <h1 className="transactions-title">Transactions Management</h1>
                <button className="add-transaction-button" onClick={handleAddTransactionClick}>
                    Add Transaction
                </button>
            </div>
            <table className="transaction-list">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(transactions.length > 0 ? transactions : sampleTransactions).map((transaction) => (
                        <tr className="transaction-item" key={transaction._id}>
                            <td>{transaction.transactionId}</td>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td>{transaction.type}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditTransactionClick(transaction)}>
                                    Edit
                                </button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Transaction Form Modal */}
            <TransactionForm 
                isOpen={isModalOpen} 
                onRequestClose={handleModalClose} 
                currentTransaction={currentTransaction} 
            />
        </div>
    );
};

export default Transactions;
