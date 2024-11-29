// src/redux/slices/transactionsSlice.js
/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching transactions
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
    const response = await axios.get('/api/transactions');
    return response.data;
});

// Transactions slice
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addTransaction(state, action) {
            state.transactions.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;*/


// src/redux/slices/transactionsSlice.js
/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching transactions
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
    const response = await axios.get('/api/transactions');
    return response.data;
});

// Async action for adding a new transaction
export const addTransaction = createAsyncThunk('transactions/addTransaction', async (newTransaction) => {
    const response = await axios.post('/api/transactions', newTransaction);
    return response.data;
});

// Async action for editing a transaction
export const editTransaction = createAsyncThunk('transactions/editTransaction', async (updatedTransaction) => {
    const response = await axios.put(`/api/transactions/${updatedTransaction._id}`, updatedTransaction);
    return response.data;
});

// Async action for deleting a transaction
export const deleteTransaction = createAsyncThunk('transactions/deleteTransaction', async (transactionId) => {
    await axios.delete(`/api/transactions/${transactionId}`);
    return transactionId;
});

// Transactions slice
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.transactions.push(action.payload);
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                const index = state.transactions.findIndex(transaction => transaction._id === action.payload._id);
                if (index !== -1) {
                    state.transactions[index] = action.payload;
                }
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.transactions = state.transactions.filter(transaction => transaction._id !== action.payload);
            });
    },
});

export default transactionsSlice.reducer;*/





// src/store/slices/transactionsSlice.js
/*backend setup kaga waiting import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching transactions
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
    const response = await axios.get('/api/transactions');
    console.log('Fetched Transactions:', response.data); // Debugging
    return response.data;
});

// Async action for adding a new transaction
export const addTransaction = createAsyncThunk('transactions/addTransaction', async (newTransaction) => {
    const response = await axios.post('/api/transactions', newTransaction);
    console.log('Added Transaction:', response.data); // Debugging
    return response.data;
});

// Async action for editing a transaction
export const editTransaction = createAsyncThunk('transactions/editTransaction', async (updatedTransaction) => {
    const response = await axios.put(`/api/transactions/${updatedTransaction._id}`, updatedTransaction);
    console.log('Edited Transaction:', response.data); // Debugging
    return response.data;
});

// Async action for deleting a transaction
export const deleteTransaction = createAsyncThunk('transactions/deleteTransaction', async (transactionId) => {
    await axios.delete(`/api/transactions/${transactionId}`);
    console.log('Deleted Transaction ID:', transactionId); // Debugging
    return transactionId;
});

// Transactions slice
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.transactions.push(action.payload);
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                const index = state.transactions.findIndex(transaction => transaction._id === action.payload._id);
                if (index !== -1) {
                    state.transactions[index] = action.payload;
                }
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.transactions = state.transactions.filter(transaction => transaction._id !== action.payload);
            });
    },
});

export default transactionsSlice.reducer;backend setup kaga waiting */



// src/store/slices/transactionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching transactions
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
    const response = await axios.get('/api/transactions');
    return response.data;
});

// Async action for adding a new transaction
export const addTransaction = createAsyncThunk('transactions/addTransaction', async (newTransaction) => {
    const response = await axios.post('/api/transactions', newTransaction);
    return response.data;
});

// Async action for editing a transaction
export const editTransaction = createAsyncThunk('transactions/editTransaction', async (updatedTransaction) => {
    const response = await axios.put(`/api/transactions/${updatedTransaction._id}`, updatedTransaction);
    return response.data;
});

// Transactions slice
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.transactions.push(action.payload);
                console.log("Transaction added:", action.payload);
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                const index = state.transactions.findIndex(transaction => transaction._id === action.payload._id);
                if (index !== -1) {
                    state.transactions[index] = action.payload;
                    console.log("Transaction edited:", action.payload);
                }
            });
    },
});

export default transactionsSlice.reducer;
