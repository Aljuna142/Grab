import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all employees from the API
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await axios.get('http://localhost:5000/api/v1/employees'); // Adjust API endpoint as necessary
    return response.data; // Return the data for the fulfilled state
});

// Add a new employee
export const addEmployee = createAsyncThunk('employees/addEmployee', async (newEmployee) => {
    const response = await axios.post('http://localhost:5000/api/v1/employees', newEmployee); // Adjust API endpoint as necessary
    return response.data; // Return the created employee data for the fulfilled state
});

// Update an existing employee
export const updateEmployee = createAsyncThunk('employees/updateEmployee', async ({ id, updatedEmployee }) => {
    const response = await axios.put(`http://localhost:5000/api/v1/employees/${id}`, updatedEmployee); // Adjust API endpoint as necessary
    return response.data; // Return the updated employee data for the fulfilled state
});

// Delete an employee
export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/employees/${id}`); // Adjust API endpoint as necessary
    return id; // Return the id for the fulfilled state
});

// Initial state
const initialState = {
    items: [],
    loading: false,
    error: null,
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; // Assign fetched employees to items
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Capture any error message
            })
            .addCase(addEmployee.fulfilled, (state, action) => {
                state.items.push(action.payload); // Add new employee to items
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                const index = state.items.findIndex(emp => emp.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload; // Update the employee data in items
                }
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.items = state.items.filter(emp => emp.id !== action.payload); // Remove employee from items
            });
    },
});

// Export actions (optional, if needed in components)
export const {} = employeesSlice.actions;

// Export reducer
export default employeesSlice.reducer;
