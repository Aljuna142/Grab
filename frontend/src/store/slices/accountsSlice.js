
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching accounts
export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () => {
    const response = await axios.get('/api/accounts');
    return response.data;
});

// Async action for adding a new account
export const addAccount = createAsyncThunk('accounts/addAccount', async (newAccount) => {
    const response = await axios.post('/api/accounts', newAccount);
    return response.data;
});

// Async action for editing an account
export const editAccount = createAsyncThunk('accounts/editAccount', async (updatedAccount) => {
    const response = await axios.put(`/api/accounts/${updatedAccount._id}`, updatedAccount);
    return response.data;
});

// Async action for deleting an account
export const deleteAccount = createAsyncThunk('accounts/deleteAccount', async (accountId) => {
    await axios.delete(`/api/accounts/${accountId}`);
    return accountId;
});

// Accounts slice
const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetching accounts
            .addCase(fetchAccounts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAccounts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.accounts = action.payload;
            })
            .addCase(fetchAccounts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Adding an account
            .addCase(addAccount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addAccount.fulfilled, (state, action) => {
                state.accounts.push(action.payload);
                state.status = 'succeeded'; // Update status
            })
            .addCase(addAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Editing an account
            .addCase(editAccount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editAccount.fulfilled, (state, action) => {
                const index = state.accounts.findIndex(account => account._id === action.payload._id);
                if (index !== -1) {
                    state.accounts[index] = action.payload;
                }
                state.status = 'succeeded'; // Update status
            })
            .addCase(editAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Deleting an account
            .addCase(deleteAccount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteAccount.fulfilled, (state, action) => {
                state.accounts = state.accounts.filter(account => account._id !== action.payload);
                state.status = 'succeeded'; // Update status
            })
            .addCase(deleteAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default accountsSlice.reducer;
