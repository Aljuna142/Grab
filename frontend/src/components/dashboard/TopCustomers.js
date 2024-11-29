/*table wise import React from 'react';
import { Table, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopCustomers.css'; // Import your CSS file

const TopCustomers = () => {
    // Mock data: Replace this with real data from your API or state management
    const topCustomers = [
        { name: 'John Doe', totalOrders: 50, totalSpent: 1200, avatar: 'https://i.pravatar.cc/100?img=1' },
        { name: 'Jane Smith', totalOrders: 45, totalSpent: 1100, avatar: 'https://i.pravatar.cc/100?img=2' },
        { name: 'Bob Johnson', totalOrders: 40, totalSpent: 1000, avatar: 'https://i.pravatar.cc/100?img=3' },
        { name: 'Alice Davis', totalOrders: 35, totalSpent: 900, avatar: 'https://i.pravatar.cc/100?img=4' },
        { name: 'Charlie Brown', totalOrders: 30, totalSpent: 800, avatar: 'https://i.pravatar.cc/100?img=5' },
    ];

    return (
        <Card className="mb-4 custom-card-bg">
            <Card.Header as="h5" className="custom-header">
                Top Customers
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Customer Name</th>
                            <th>Total Orders</th>
                            <th>Total Spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topCustomers.map((customer, index) => (
                            <tr key={index}>
                                <td>
                                    <Image src={customer.avatar} roundedCircle width={50} height={50} />
                                </td>
                                <td>{customer.name}</td>
                                <td>{customer.totalOrders}</td>
                                <td>${customer.totalSpent.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default TopCustomers;table wise */



/*perfect customer card import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopCustomers.css'; // Import your CSS file

const TopCustomers = () => {
    // Mock data: Replace this with real data from your API or state management
    const topCustomer = {
        name: 'Walking Customer', 
        totalOrders: 0, 
        avatar: 'https://i.pravatar.cc/100?img=1'
    };

    return (
        <Card className="mb-4 custom-card">
            <Card.Body className="d-flex align-items-center">
                <Image src={topCustomer.avatar} roundedCircle width={50} height={50} />
                <div className="ms-3">
                    <Card.Title className="mb-0 custom-title">{topCustomer.name}</Card.Title>
                    <Card.Text className="mb-0 custom-orders">{topCustomer.totalOrders} Orders</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TopCustomers;*/



/*top customers title import React from 'react';
import { Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopCustomers.css'; // Import your CSS file

const TopCustomers = () => {
    // Mock data: Replace this with real data from your API or state management
    const topCustomer = {
        name: 'Walking Customer', 
        totalOrders: 0, 
        avatar: 'https://i.pravatar.cc/100?img=1'
    };

    return (
        <div className="top-customers-container">
            <Card className="mb-3 custom-title-card">
                <Card.Header as="h5" className="text-center custom-header">
                    Top Customers
                </Card.Header>
            </Card>

            <Card className="mb-4 custom-card">
                <Card.Body className="d-flex align-items-center">
                    <Image src={topCustomer.avatar} roundedCircle width={50} height={50} />
                    <div className="ms-3">
                        <Card.Title className="mb-0 custom-title">{topCustomer.name}</Card.Title>
                        <Card.Text className="mb-0 custom-orders">{topCustomer.totalOrders} Orders</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopCustomers;*/


import React from 'react';
import { Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopCustomers.css'; // Import your CSS file

const TopCustomers = () => {
    // Mock data: Replace this with real data from your API or state management
    const topCustomers = [
        { name: 'Walking Customer', totalOrders: 0, avatar: 'https://i.pravatar.cc/100?img=1' },
        { name: 'John Doe', totalOrders: 50, avatar: 'https://i.pravatar.cc/100?img=2' },
        { name: 'Jane Smith', totalOrders: 45, avatar: 'https://i.pravatar.cc/100?img=3' }
    ];

    return (
        <div className="top-customers-container">
            <Card className="mb-3 custom-title-card">
                <Card.Header as="h5" className="text-center custom-header">
                    Top Customers
                </Card.Header>
            </Card>

            {topCustomers.map((customer, index) => (
                <Card key={index} className="mb-4 custom-card">
                    <Card.Body className="d-flex align-items-center">
                        <Image src={customer.avatar} roundedCircle width={50} height={50} />
                        <div className="ms-3">
                            <Card.Title className="mb-0 custom-title">{customer.name}</Card.Title>
                            <Card.Text className="mb-0 custom-orders">{customer.totalOrders} Orders</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default TopCustomers;





