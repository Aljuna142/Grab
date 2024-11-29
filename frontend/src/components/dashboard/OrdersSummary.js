/*import React from 'react';
// Add relevant styles here

const OrdersSummary = () => {
  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-stats">
        <div className="stat-circle">0</div>
        <div className="bar-indicators">
          <div className="bar delivered">Delivered (0%)</div>
          <div className="bar canceled">Canceled (0%)</div>
          <div className="bar rejected">Rejected (0%)</div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;*/

/*css design orbit ball import React from 'react';
import './OrdersSummary.css'; // Make sure to import your CSS

const OrdersSummary = () => {
  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-stats">
        <div className="stat-circle">
          <div className="circle-content">
            <div className="circle-background">
              <div className="circle delivered"></div>
              <div className="circle canceled"></div>
              <div className="circle rejected"></div>
            </div>
            <div className="circle-center">0</div>
          </div>
        </div>
        <div className="bar-indicators">
          <div className="bar delivered">Delivered (0%)</div>
          <div className="bar canceled">Canceled (0%)</div>
          <div className="bar rejected">Rejected (0%)</div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;*/


/*import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 10, color: 'orange' },
    { name: 'Canceled', value: 5, color: 'purple' },
    { name: 'Rejected', value: 3, color: 'red' },
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={120}
            fill="#ffc658"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersSummary;pie chart */

/* import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const OrdersSummary = () => {
  const data = [
    { id: 'Delivered', value: 90, color: '#A3D02C' },
    { id: 'Canceled', value: 30, color: 'purple' },
    { id: 'Rejected', value: 30, color: 'red' },
  ];

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container" style={{ height: '300px', width: '50%' }}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
            innerRadius={0.6}  // Adjust this value to change the donut size
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={({ data }) => data.color}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            enableArcLinkLabels={false}
            enableArcLabels={false}  // Disable labels inside the chart
          />
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div key={entry.id} className="bar-indicator">
              <div
                className="bar"
                style={{ width: `${entry.value}%`, backgroundColor: entry.color }}
              />
              <div className="bar-label">
                {`${entry.id} (${entry.value}%)`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;
nivo*/

/*import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 90, color: '#A3D02C' },
    { name: 'Canceled', value: 30, color: ' orange' },
    { name: 'Rejected', value: 30, color: 'red' },
  ];
  console.log("Data values:", data);
  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
                    </text>
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#ffc658"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div
              key={entry.name}
              className={`bar ${entry.name.toLowerCase()}`}
              data-percentage={entry.value}
              style={{ width: `${entry.value}%` }}
            >
              {`${entry.name}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;pie chart*/


/*pie chart centrimport React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 90, color: '#A3D02C' },
    { name: 'Canceled', value: 30, color: 'orange' },
    { name: 'Rejected', value: 30, color: 'red' },
  ];

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container">
          <ResponsiveContainer width="50%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={60}
                fill="#8884d8"
                labelLine={false}
                label={false}  // Disable labels on the chart
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={80}
                fill="#82ca9d"
                labelLine={false}
                label={false}  // Disable labels on the chart
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={100}
                fill="#ffc658"
                labelLine={false}
                label={false}  // Disable labels on the chart
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div
              key={entry.name}
              className="bar-indicator"
              style={{ backgroundColor: entry.color }}
            >
              <div
                className="bar"
                style={{ width: `${entry.value}%` }}
              >
                {`${entry.name}`}
              </div>
              <div className="bar-label">
                {`${entry.value}%`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;pie chart chart ok*/











/*bootstrap progreess bar import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 90, color: '#A3D02C' },
    { name: 'Canceled', value: 30, color: 'orange' },
    { name: 'Rejected', value: 30, color: 'red' },
  ];

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#ffc658"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div key={entry.name} className="progress mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${entry.value}%`, backgroundColor: entry.color }}
                aria-valuenow={entry.value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`${entry.value}%`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;bootstap progress bar */




/*labelimport React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 90, color: '#A3D02C' },
    { name: 'Canceled', value: 30, color: 'orange' },
    { name: 'Rejected', value: 30, color: 'red' },
  ];

  // Function to avoid unnecessary re-renders or layout changes
  const useResizeObserver = (callback) => {
    useEffect(() => {
      const observer = new ResizeObserver(callback);
      const target = document.querySelector('.chart-container');
      if (target) observer.observe(target);

      return () => {
        if (target) observer.unobserve(target);
      };
    }, [callback]);
  };

  useResizeObserver(() => {
    // Handle resize logic here if needed
  });

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#ffc658"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div key={entry.name} className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${entry.value}%`, backgroundColor: entry.color }}
                  aria-valuenow={entry.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {`${entry.value}%`}
                </div>
              </div>
              <div className="progress-label">
                {entry.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;*/

/*goodu import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 90, color: '#A3D02C' },
    { name: 'Canceled', value: 30, color: ' #c001ff' },
    { name: 'Rejected', value: 30, color: 'red' },
  ];

  // Hook to handle resize events
  const useResizeObserver = (callback) => {
    useEffect(() => {
      const observer = new ResizeObserver(callback);
      const targets = document.querySelectorAll('.chart-container, .bar-indicators');
      targets.forEach(target => observer.observe(target));

      return () => {
        targets.forEach(target => observer.unobserve(target));
      };
    }, [callback]);
  };

  useResizeObserver(() => {
    // Handle resize logic here if needed
  });

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h5>Orders Summary</h5>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#ffc658"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div key={entry.name} className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${entry.value}%`, backgroundColor: entry.color }}
                  aria-valuenow={entry.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {`${entry.value}%`}
                </div>
              </div>
              <div className="progress-label">
                {entry.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;goodu*/







 import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdersSummary = () => {
  const data = [
    { name: 'Delivered', value: 60, color: '#A3D02C' },
    { name: 'Canceled', value: 40, color: '#c001ff' },
    { name: 'Rejected', value: 20, color: 'red' },
  ];

  const totalOrders = data.reduce((total, entry) => total + entry.value, 0);

  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h5>Orders Summary</h5>
        <div className="date-range">
          <span></span>
        </div>
      </div>
      <hr />
      <div className="order-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#ffc658"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-indicators">
          {data.map((entry) => (
            <div key={entry.name} className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${entry.value}%`, backgroundColor: entry.color }}
                  aria-valuenow={entry.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {`${entry.value}%`}
                </div>
              </div>
              <div className="progress-label">
                {entry.name}
              </div>
            </div>
          ))}
          <div className="total-orders">
            <div className="total-orders-label">Total Orders:</div>
            <div className="total-orders-count">{totalOrders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;




