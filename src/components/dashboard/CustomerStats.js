/*import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomerStats = () => {
  // Example data showing customer activity for each hour of the day
  const data = [
    { time: '00:00', customers: 5 },
    { time: '01:00', customers: 3 },
    { time: '02:00', customers: 2 },
    { time: '03:00', customers: 1 },
    { time: '04:00', customers: 0 },
    { time: '05:00', customers: 1 },
    { time: '06:00', customers: 7 },
    { time: '07:00', customers: 10 },
    { time: '08:00', customers: 20 },
    { time: '09:00', customers: 25 },
    { time: '10:00', customers: 30 },
    { time: '11:00', customers: 35 },
    { time: '12:00', customers: 40 },
    { time: '13:00', customers: 45 },
    { time: '14:00', customers: 50 },
    { time: '15:00', customers: 55 },
    { time: '16:00', customers: 60 },
    { time: '17:00', customers: 65 },
    { time: '18:00', customers: 70 },
    { time: '19:00', customers: 75 },
    { time: '20:00', customers: 80 },
    { time: '21:00', customers: 85 },
    { time: '22:00', customers: 90 },
    { time: '23:00', customers: 95 },
  ];

  return (
    <div className="customer-stats">
      <h5>Customer Activity by Hour</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="customers" fill="#F23E14" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerStats;withoiut cards*/




/*import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerStats = () => {
    const data = [
        { time: '00:00', customers: 10 },
        { time: '01:00', customers: 5 },
        { time: '02:00', customers: 2 },
        { time: '03:00', customers: 0 },
        { time: '04:00', customers: 1 },
        { time: '05:00', customers: 3 },
        { time: '06:00', customers: 8 },
        { time: '07:00', customers: 15 },
        { time: '08:00', customers: 20 },
        { time: '09:00', customers: 25 },
        { time: '10:00', customers: 30 },
        { time: '11:00', customers: 35 },
        { time: '12:00', customers: 40 },
        { time: '13:00', customers: 45 },
        { time: '14:00', customers: 50 },
        { time: '15:00', customers: 55 },
        { time: '16:00', customers: 60 },
        { time: '17:00', customers: 70 },
        { time: '18:00', customers: 80 },
        { time: '19:00', customers: 90 },
        { time: '20:00', customers: 95 },
        { time: '21:00', customers: 100 },
        { time: '22:00', customers: 85 },
        { time: '23:00', customers: 70 },
    ];

    return (
        <Card className="mb-4">
            <Card.Header as="h5">Customer Activity by Time of Day</Card.Header>
            <Card.Body>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="customers" fill="#F23E14" />
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default CustomerStats;good*/









/*without external css import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerStats = () => {
    const data = [
        { time: '00:00', customers: 10 },
        { time: '01:00', customers: 5 },
        { time: '02:00', customers: 2 },
        { time: '03:00', customers: 0 },
        { time: '04:00', customers: 1 },
        { time: '05:00', customers: 3 },
        { time: '06:00', customers: 8 },
        { time: '07:00', customers: 15 },
        { time: '08:00', customers: 20 },
        { time: '09:00', customers: 25 },
        { time: '10:00', customers: 30 },
        { time: '11:00', customers: 35 },
        { time: '12:00', customers: 40 },
        { time: '13:00', customers: 45 },
        { time: '14:00', customers: 50 },
        { time: '15:00', customers: 55 },
        { time: '16:00', customers: 60 },
        { time: '17:00', customers: 70 },
        { time: '18:00', customers: 80 },
        { time: '19:00', customers: 90 },
        { time: '20:00', customers: 95 },
        { time: '21:00', customers: 100 },
        { time: '22:00', customers: 85 },
        { time: '23:00', customers: 70 },
    ];

    return (
        <Card className="mb-4" style={{ backgroundColor: 'white' }}>
            <Card.Header as="h5">Customer Stats</Card.Header>
            <Card.Body>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="customers" fill="#F23E14" />
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default CustomerStats;without external css*/

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerStats.css'; // Import your CSS file

const CustomerStats = () => {
    const data = [
        { time: '00:00', customers: 10 },
        { time: '01:00', customers: 5 },
        { time: '02:00', customers: 2 },
        { time: '03:00', customers: 0 },
        { time: '04:00', customers: 1 },
        { time: '05:00', customers: 3 },
        { time: '06:00', customers: 8 },
        { time: '07:00', customers: 15 },
        { time: '08:00', customers: 20 },
        { time: '09:00', customers: 25 },
        { time: '10:00', customers: 30 },
        { time: '11:00', customers: 35 },
        { time: '12:00', customers: 40 },
        { time: '13:00', customers: 45 },
        { time: '14:00', customers: 50 },
        { time: '15:00', customers: 55 },
        { time: '16:00', customers: 60 },
        { time: '17:00', customers: 70 },
        { time: '18:00', customers: 80 },
        { time: '19:00', customers: 90 },
        { time: '20:00', customers: 95 },
        { time: '21:00', customers: 100 },
        { time: '22:00', customers: 85 },
        { time: '23:00', customers: 70 },
    ];

    return (
        <Card className="mb-4 custom-card-bg">
            <Card.Header as="h5" className="custom-header">
                Customer Stats
            </Card.Header>
            <Card.Body>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="customers" fill="#F23E14" />
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default CustomerStats;


/*
Demorgraphic
target audience 
target right people 







*/





