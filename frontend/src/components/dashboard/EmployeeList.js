

/*
 * EmployeeList component that fetches employees and displays them in a table.
 * It also includes a button to add a new employee.
 * The component uses Redux to manage the employee state.
 *the component also includes a button to remove a employee from the employee list and displaying the employees list in a table.THE DELETE
 * Props:
 * - employees: An array of employee objects
*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../store/slices/employeesSlice'; // Import your fetchEmployees action
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.items); // Adjust based on your Redux state structure
    const loading = useSelector((state) => state.employees.loading);
    const error = useSelector((state) => state.employees.error);

    useEffect(() => {
        dispatch(fetchEmployees()); // Fetch employees when the component mounts
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Employees List</h1>
            <Link to="/employees/new" className="btn btn-primary" style={{ float: 'right' }}>Add Employee</Link>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/employees/${employee.id}`}>
                                    {employee.name}
                                </Link>
                            </td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
