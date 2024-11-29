

/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('/api/v1/users');
    return response.data;
});

// Fetch user by ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await axios.get(`/api/v1/users/${id}`);
    return response.data;
});

// Create a new user
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
    const response = await axios.post('/api/v1/users', userData);
    return response.data;
});

// Update an existing user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, data }) => {
    const response = await axios.put(`/api/v1/users/${id}`, data);
    return response.data;
});

// Delete a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(`/api/v1/users/${id}`);
    return id;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);  // Add new user to the list
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user._id === action.payload._id);
                if (index !== -1) {
                    state.users[index] = action.payload;  // Update user in the list
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user._id !== action.payload);
            });
    }
});

export default userSlice.reducer;*/




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('/api/v1/users');
    return response.data;
});

// Fetch user by ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await axios.get(`/api/v1/users/${id}`);
    return response.data;
});

// Create a new user
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
    const response = await axios.post('/api/v1/users', userData);
    return response.data;
});

// Update an existing user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, data }) => {
    const response = await axios.put(`/api/v1/users/${id}`, data);
    return response.data;
});

// Delete a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(`/api/v1/users/${id}`);
    return id;  // Return the ID of the deleted user
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);  // Add new user to the list
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user._id === action.payload._id);
                if (index !== -1) {
                    state.users[index] = action.payload;  // Update user in the list
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user._id !== action.payload);  // Remove deleted user
            });
    }
});

export default userSlice.reducer;
