import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee, deleteEmployee } from '../../../store/slices/employeesSlice'; // Import actions
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const employee = useSelector((state) =>
        state.employees.items.find((emp) => emp.id === parseInt(id))
    );

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setEmail(employee.email);
        }
    }, [employee]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            // Editing existing employee
            dispatch(updateEmployee({ id: parseInt(id), updatedEmployee: { name, email } }));
        } else {
            // Adding new employee
            dispatch(addEmployee({ name, email }));
        }
        navigate('/employees'); // Redirect to Employee List after submission
    };

    const handleDelete = () => {
        if (id) {
            dispatch(deleteEmployee(parseInt(id))); // Delete the employee if editing
            navigate('/employees'); // Redirect to Employee List after deletion
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Employee' : 'Add Employee'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? 'Update Employee' : 'Add Employee'}
                </button>
                {id && (
                    <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>
                        Delete Employee
                    </button>
                )}
            </form>
        </div>
    );
};

export default EmployeeForm;
