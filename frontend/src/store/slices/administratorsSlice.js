/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching administrators
export const fetchAdministrators = createAsyncThunk('administrators/fetchAdministrators', async () => {
    const response = await axios.get('/api/administrators');
    return response.data;
});

// Async thunk for fetching a specific administrator's detail
export const fetchAdministratorDetail = createAsyncThunk('administrators/fetchAdministratorDetail', async (id) => {
    const response = await axios.get(`/api/administrators/${id}`);
    return response.data;
});

// Async thunk for adding a new administrator
export const addAdministrator = createAsyncThunk('administrators/addAdministrator', async (adminData) => {
    const response = await axios.post('/api/administrators', adminData);
    return response.data;
});

// Creating the administrators slice
const administratorsSlice = createSlice({
    name: 'administrators',
    initialState: {
        list: [], // Initial state for list of administrators
        detail: null, // Initial state for detail of a specific administrator
        loading: false, // Loading state
        error: null, // Error state
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdministrators.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error state on new fetch
            })
            .addCase(fetchAdministrators.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAdministrators.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Handle errors
            })
            .addCase(fetchAdministratorDetail.fulfilled, (state, action) => {
                state.detail = action.payload;
            })
            .addCase(addAdministrator.fulfilled, (state, action) => {
                state.list.push(action.payload);
            });
    }
});

export default administratorsSlice.reducer; this is api call at the moment we dont have api call*/


/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mocked API response for fetching administrators
export const fetchAdministrators = createAsyncThunk('administrators/fetchAdministrators', async () => {
    return [
        { id: 1, name: 'Aljuna', email: 'alju123@example.com' },
        { id: 2, name: 'Admin Two', email: 'admin2@example.com' },
        { id: 3, name: 'Admin Three', email: 'admin3@example.com' },
    ];
});

export const fetchAdministratorDetail = createAsyncThunk('administrators/fetchAdministratorDetail', async (id) => {
    // Mocked response for fetching administrator details
    return { id, name: `Admin ${id}`, email: `admin${id}@example.com` };
});

export const addAdministrator = createAsyncThunk('administrators/addAdministrator', async (adminData) => {
    // Mocked response for adding an administrator
    return { id: Math.random(), ...adminData }; // Random ID for demo purposes
});

const administratorsSlice = createSlice({
    name: 'administrators',
    initialState: {
        list: [],
        detail: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdministrators.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAdministrators.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAdministratorDetail.fulfilled, (state, action) => {
                state.detail = action.payload;
            })
            .addCase(addAdministrator.fulfilled, (state, action) => {
                state.list.push(action.payload);
            });
    },
});

export default administratorsSlice.reducer;duplicate data without api*/

/*good import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch administrators from the backend
export const fetchAdministrators = createAsyncThunk('administrators/fetchAdministrators', async () => {
    const response = await axios.get('http://localhost:5000/api/v1/admins'); // Update with your backend URL
    return response.data; // Assuming the response is an array of administrators
});

// Fetch a specific administrator detail by ID
export const fetchAdministratorDetail = createAsyncThunk('administrators/fetchAdministratorDetail', async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/admins/${id}`);
    return response.data;
});

// Add a new administrator
export const addAdministrator = createAsyncThunk('administrators/addAdministrator', async (adminData) => {
    const response = await axios.post('http://localhost:5000/api/v1/admins', adminData);
    return response.data; // Assuming the response is the created admin
});

const administratorsSlice = createSlice({
    name: 'administrators',
    initialState: {
        list: [],
        detail: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Administrators
            .addCase(fetchAdministrators.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAdministrators.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAdministrators.rejected, (state) => {
                state.loading = false;
            })

            // Fetch Administrator Detail
            .addCase(fetchAdministratorDetail.fulfilled, (state, action) => {
                state.detail = action.payload;
            })

            // Add Administrator
            .addCase(addAdministrator.fulfilled, (state, action) => {
                state.list.push(action.payload);
            });
    },
});

export default administratorsSlice.reducer;good*/



/*good 1import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch administrators from the backend
export const fetchAdministrators = createAsyncThunk(
    'administrators/fetchAdministrators',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/admins'); // Backend URL
            return response.data; // Assuming the response is an array of administrators
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

// Fetch a specific administrator's detail by ID
export const fetchAdministratorDetail = createAsyncThunk(
    'administrators/fetchAdministratorDetail',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/admins/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

// Add a new administrator
export const addAdministrator = createAsyncThunk(
    'administrators/addAdministrator',
    async (adminData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/admins', adminData);
            return response.data; // Assuming the response is the created admin
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

const administratorsSlice = createSlice({
    name: 'administrators',
    initialState: {
        list: [],
        detail: null,
        loading: false,
        error: null, // To track any errors
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Administrators
            .addCase(fetchAdministrators.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear previous errors
            })
            .addCase(fetchAdministrators.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAdministrators.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store error message
            })

            // Fetch Administrator Detail
            .addCase(fetchAdministratorDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdministratorDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.detail = action.payload;
            })
            .addCase(fetchAdministratorDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add Administrator
            .addCase(addAdministrator.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addAdministrator.fulfilled, (state, action) => {
                state.loading = false;
                state.list.push(action.payload); // Add new admin to the list
            })
            .addCase(addAdministrator.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default administratorsSlice.reducer;good 1*/




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch administrators from the backend
export const fetchAdministrators = createAsyncThunk(
    'administrators/fetchAdministrators',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/admins'); // Backend URL
            return response.data; // Assuming the response is an array of administrators
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

// Fetch a specific administrator's detail by ID
export const fetchAdministratorDetail = createAsyncThunk(
    'administrators/fetchAdministratorDetail',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/admins/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

// Add a new administrator
export const addAdministrator = createAsyncThunk(
    'administrators/addAdministrator',
    async (adminData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/admins', adminData);
            return response.data; // Assuming the response is the created admin
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

// Edit an existing administrator
export const editAdministrator = createAsyncThunk(
    'administrators/editAdministrator',
    async ({ id, adminData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/admins/${id}`, adminData);
            return response.data; // Assuming the response is the updated admin
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

// Delete an administrator
export const deleteAdministrator = createAsyncThunk(
    'administrators/deleteAdministrator',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/admins/${id}`);
            return id; // Return the id of the deleted admin
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);

const administratorsSlice = createSlice({
    name: 'administrators',
    initialState: {
        list: [],
        detail: null,
        loading: false,
        error: null, // To track any errors
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Administrators
            .addCase(fetchAdministrators.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear previous errors
            })
            .addCase(fetchAdministrators.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAdministrators.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store error message
            })

            // Fetch Administrator Detail
            .addCase(fetchAdministratorDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdministratorDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.detail = action.payload;
            })
            .addCase(fetchAdministratorDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add Administrator
            .addCase(addAdministrator.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addAdministrator.fulfilled, (state, action) => {
                state.loading = false;
                state.list.push(action.payload); // Add new admin to the list
            })
            .addCase(addAdministrator.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Edit Administrator
            .addCase(editAdministrator.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editAdministrator.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.list.findIndex(admin => admin.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload; // Update the existing admin in the list
                }
            })
            .addCase(editAdministrator.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Administrator
            .addCase(deleteAdministrator.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteAdministrator.fulfilled, (state, action) => {
                state.loading = false;
                state.list = state.list.filter(admin => admin.id !== action.payload); // Remove deleted admin from the list
            })
            .addCase(deleteAdministrator.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default administratorsSlice.reducer;



