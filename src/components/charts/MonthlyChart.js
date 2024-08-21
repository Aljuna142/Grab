// src/components/charts/MonthlyChart.js
/*import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';

// Function to generate sales data for a specific month
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 1000) // Replace with actual sales data
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const data = generateMonthlySalesData(getDaysInMonth(selectedMonth));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>Monthly {selectedMonth.toLocaleString('default', { month: 'long' })}</h2>
      <DatePicker
        selected={selectedMonth}
        onChange={date => setSelectedMonth(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        placeholderText="Select Month"
      />
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
          <YAxis label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;*/



/*// src/components/charts/MonthlyChart.js
import React, { useState } from 'react';
import { Card, Typography, Container } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import './MonthlyChart.css'; // Import custom CSS

// Function to generate sales data for a specific month
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 1000) // Replace with actual sales data
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const data = generateMonthlySalesData(getDaysInMonth(selectedMonth));

  return (
    <Container maxWidth="md" className="monthly-chart-container">
      <Card className="monthly-chart-card">
        <Typography variant="h5" className="monthly-chart-title">
          Monthly {selectedMonth.toLocaleString('default', { month: 'long' })}
        </Typography>
        <DatePicker
          selected={selectedMonth}
          onChange={date => setSelectedMonth(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          placeholderText="Select Month"
          className="date-picker"
        />
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
            <YAxis label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default MonthlyChart;graph*/



// src/components/charts/MonthlyChart.js
/*okay good chart import React, { useState } from 'react';
import { Card, Typography, Container } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import './MonthlyChart.css'; // Import custom CSS

// Function to generate sales data for a specific month
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const data = generateMonthlySalesData(getDaysInMonth(selectedMonth));

  return (
    <Container maxWidth="md" className="monthly-chart-container">
      <Card className="monthly-chart-card">
        <Typography variant="h5" className="monthly-chart-title">
          Monthly {selectedMonth.toLocaleString('default', { month: 'long' })}
        </Typography>
        <DatePicker
          selected={selectedMonth}
          onChange={date => setSelectedMonth(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          placeholderText="Select Month"
          className="date-picker"
        />
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
            <YAxis
              scale="log" // Use logarithmic scale
              domain={[1, 500000]} // Set domain to 0 to 5 lakhs
              label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }}
              tickFormatter={(value) => {
                if (value >= 100000) {
                  return `${(value / 100000).toFixed(1)}L`;
                }
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`;
                }
                return value;
              }}
            />
            <Tooltip formatter={(value) => `${value.toLocaleString()} AED`} />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default MonthlyChart;good chart */



// src/components/charts/MonthlyChart.js
/*import React, { useState } from 'react';
import { Card, Typography, Container, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import './MonthlyChart.css'; // Import custom CSS

// Function to generate sales data for a specific month
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const data = generateMonthlySalesData(getDaysInMonth(selectedMonth));

  // Calculate total and average sales
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const avgSales = totalSales / data.length;

  return (
    <Container maxWidth="md" className="monthly-chart-container">
      <Card className="monthly-chart-card">
        <div className="date-picker-container">
          <DatePicker
            selected={selectedMonth}
            onChange={date => setSelectedMonth(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
            placeholderText="Select Month"
            className="date-picker"
          />
        </div>
        <Typography variant="h5" className="monthly-chart-title">
          Monthly {selectedMonth.toLocaleString('default', { month: 'long' })}
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
            <YAxis
              scale="log" // Use logarithmic scale
              domain={[1, 500000]} // Set domain to 0 to 5 lakhs
              label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }}
              tickFormatter={(value) => {
                if (value >= 100000) {
                  return `${(value / 100000).toFixed(1)}L`;
                }
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`;
                }
                return value;
              }}
            />
            <Tooltip formatter={(value) => `${value.toLocaleString()} AED`} />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <Grid container spacing={2} className="sales-summary">
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Total Sales:</strong> {totalSales.toLocaleString()} AED</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Avg Sales:</strong> {avgSales.toLocaleString()} AED</Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default MonthlyChart;11*/


// src/components/charts/MonthlyChart.js
/*without theme import React, { useState } from 'react';
import { Card, Typography, Container, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import './MonthlyChart.css'; // Import custom CSS

// Function to generate sales data for a given range
const generateSalesData = (startDate, endDate) => {
  const days = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    days.push({
      date: currentDate.getDate(),
      sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
};

// Function to generate monthly sales data
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [viewType, setViewType] = useState('month'); // 'month' or 'range'

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Generate data based on view type
  const data = viewType === 'month'
    ? generateMonthlySalesData(getDaysInMonth(selectedMonth))
    : generateSalesData(startDate, endDate);

  // Calculate total and average sales
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const avgSales = data.length > 0 ? totalSales / data.length : 0;

  return (
    <Container maxWidth="md" className="monthly-chart-container">
      <Card className="monthly-chart-card">
        <div className="date-picker-container">
          <FormControl fullWidth variant="outlined" className="view-selector">
            <InputLabel>View</InputLabel>
            <Select
              value={viewType}
              onChange={e => setViewType(e.target.value)}
              label="View"
            >
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="range">Date Range</MenuItem>
            </Select>
          </FormControl>
          {viewType === 'month' ? (
            <DatePicker
              selected={selectedMonth}
              onChange={date => setSelectedMonth(date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              placeholderText="Select Month"
              className="date-picker"
            />
          ) : (
            <>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="date-picker"
              />
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="yyyy/MM/dd"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                className="date-picker"
              />
            </>
          )}
        </div>
        <Typography variant="h5" className="monthly-chart-title">
          {viewType === 'month'
            ? `Monthly ${selectedMonth.toLocaleString('default', { month: 'long' })}`
            : `Sales from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
            <YAxis
              scale="log" // Use logarithmic scale
              domain={[1, 500000]} // Set domain to 0 to 5 lakhs
              label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }}
              tickFormatter={(value) => {
                if (value >= 100000) {
                  return `${(value / 100000).toFixed(1)}L`;
                }
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`;
                }
                return value;
              }}
            />
            <Tooltip formatter={(value) => `${value.toLocaleString()} AED`} />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <Grid container spacing={2} className="sales-summary">
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Total Sales:</strong> {totalSales.toLocaleString()} AED</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Avg Sales:</strong> {avgSales.toLocaleString()} AED</Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default MonthlyChart;without theme*/

/*import React, { useState } from 'react';
import { Card, Typography, Container, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import { useTheme } from '@mui/material/styles'; // Import useTheme for theme access
import './MonthlyChart.css'; // Import custom CSS

// Function to generate sales data for a specific month
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const theme = useTheme(); // Access theme colors

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const data = generateMonthlySalesData(getDaysInMonth(selectedMonth));

  // Calculate total and average sales
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const avgSales = totalSales / data.length;

  return (
    <Container maxWidth="md" className="monthly-chart-container">
      <Card className="monthly-chart-card">
        <div className="date-picker-container">
          <DatePicker
            selected={selectedMonth}
            onChange={date => setSelectedMonth(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
            placeholderText="Select Month"
            className="date-picker"
          />
        </div>
        <Typography variant="h5" className="monthly-chart-title">
          Monthly {selectedMonth.toLocaleString('default', { month: 'long' })}
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
            <YAxis
              domain={[0, 500000]} // Set domain to 0 to 5 lakhs
              label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }}
              tickFormatter={(value) => {
                if (value >= 100000) {
                  return `${(value / 100000).toFixed(1)}L`;
                }
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`;
                }
                return value;
              }}
            />
            <Tooltip formatter={(value) => `${value.toLocaleString()} AED`} />
            <Line type="monotone" dataKey="sales" stroke={theme.palette.chart?.colors[0] || '#8884d8'} />
            {/* Add more lines if needed with different colors from the palette }
          </LineChart>
        </ResponsiveContainer>
        <Grid container spacing={2} className="sales-summary">
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Total Sales:</strong> {totalSales.toLocaleString()} AED</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Avg Sales:</strong> {avgSales.toLocaleString()} AED</Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default MonthlyChart;theme*/



// src/components/charts/MonthlyChart.js
import React, { useState } from 'react';
import { Card, Typography, Container, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import './MonthlyChart.css'; // Import custom CSS

// Function to generate sales data for a given range
const generateSalesData = (startDate, endDate) => {
  const days = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    days.push({
      date: currentDate.getDate(),
      sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
};

// Function to generate monthly sales data
const generateMonthlySalesData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i + 1,
    sales: Math.floor(Math.random() * 500000) // Random sales data up to 5 lakhs
  }));
};

const MonthlyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [viewType, setViewType] = useState('month'); // 'month' or 'range'

  // Get the number of days in the selected month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Generate data based on view type
  const data = viewType === 'month'
    ? generateMonthlySalesData(getDaysInMonth(selectedMonth))
    : generateSalesData(startDate, endDate);

  // Calculate total and average sales
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const avgSales = data.length > 0 ? totalSales / data.length : 0;

  return (
    <Container maxWidth="md" className="monthly-chart-container">
      <Card className="monthly-chart-card">
        <div className="date-picker-container">
          <FormControl fullWidth variant="outlined" className="view-selector">
            <InputLabel>View</InputLabel>
            <Select
              value={viewType}
              onChange={e => setViewType(e.target.value)}
              label="View"
            >
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="range">Date Range</MenuItem>
            </Select>
          </FormControl>
          {viewType === 'month' ? (
            <DatePicker
              selected={selectedMonth}
              onChange={date => setSelectedMonth(date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              placeholderText="Select Month"
              className="date-picker"
            />
          ) : (
            <>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="date-picker"
              />
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="yyyy/MM/dd"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                className="date-picker"
              />
            </>
          )}
        </div>
        <Typography variant="h5" className="monthly-chart-title">
          {viewType === 'month'
            ? `Monthly ${selectedMonth.toLocaleString('default', { month: 'long' })}`
            : `Sales from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{ value: 'Day of Month', position: 'insideBottomRight', offset: 0 }} />
            <YAxis
              scale="log" // Use logarithmic scale
              domain={[1, 500000]} // Set domain to 0 to 5 lakhs
              label={{ value: 'Sales (AED)', angle: -90, position: 'insideLeft' }}
              tickFormatter={(value) => {
                if (value >= 100000) {
                  return `${(value / 100000).toFixed(1)}L`;
                }
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`;
                }
                return value;
              }}
            />
            <Tooltip formatter={(value) => `${value.toLocaleString()} AED`} />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <Grid container spacing={2} className="sales-summary">
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Total Sales:</strong> {totalSales.toLocaleString()} AED</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1"><strong>Avg Sales:</strong> {avgSales.toLocaleString()} AED</Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default MonthlyChart;
