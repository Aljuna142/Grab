/*import React from 'react';
// Add relevant styles here

const SalesSummary = () => {
  return (
    <div className="sales-summary">
      <div className="summary-header">
        <h2>Sales Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
          <button className="close-btn">X</button>
        </div>
      </div>
      <hr />
      <div className="sales-stats">
        <div className="stat-item">
          <span className="icon">$</span>
          <span>Total Sales</span>
          <span className="amount">$0.00</span>
        </div>
        <div className="stat-item">
          <span className="icon">$</span>
          <span>Avg Sales Per Day</span>
          <span className="amount">$0.00</span>
        </div>
      </div>
      <div className="date-line">
        {/* Placeholder for the date line and hover effect }
        <span className="hover-line">Date: 9</span>
        <span className="sales-count">Sales: 0</span>
      </div>
    </div>
  );
};

export default SalesSummary;*/


/*import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import './SalesSummary.css';

const SalesSummary = () => {
  return (
    <div className="sales-summary">
      <div className="sales-summary-header">
        <h3>Sales Summary</h3>
        <button className="date-range-btn">Select Date Range</button>
      </div>
      <div className="sales-summary-content">
        <div className="sales-summary-stats">
          <div className="stat-item">
            <FaDollarSign className="stat-icon" />
            <div>
              <p>Total Sales</p>
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="stat-item">
            <FaDollarSign className="stat-icon" />
            <div>
              <p>Avg Sales Per Day</p>
              <h4>$0.00</h4>
            </div>
          </div>
        </div>
        <div className="sales-summary-graph">
          <div className="graph-line"></div>
          <div className="hover-box">
            <span>28</span>
            <span>Sales: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;*/




/*import React, { useState } from 'react';
import { Row, Col, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaDollarSign, FaChartLine } from 'react-icons/fa';

const SalesSummary = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="sales-summary">
            {/* First Row: Header }
            <Row className="align-items-center mb-3">
                <Col><h5>Sales Summary</h5></Col>
                <Col className="text-end">
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        customInput={<Button variant="outline-secondary">Select Date Range</Button>} 
                    />
                </Col>
            </Row>

            {/* Second Row: Sales Info }
            <Row className="mb-3">
                <Col>
                    <div className="sales-info d-flex align-items-center">
                        <FaDollarSign className="sales-icon" />
                        <div className="ms-2">
                            <p>Total Sales</p>
                            <h4>AED 0.00</h4>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="sales-info d-flex align-items-center">
                        <FaChartLine className="sales-icon" />
                        <div className="ms-2">
                            <p>Avg Sales Per Day</p>
                            <h4>AED 0.00</h4>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Third Row: Graph }
            <div className="graph">
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="graph-line">
                            {Array.from({ length: 31 }, (_, i) => (
                                <OverlayTrigger
                                    key={i}
                                    placement="top"
                                    overlay={<Tooltip>Sales: 0</Tooltip>}
                                >
                                    <span className="graph-point">{i + 1}</span>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SalesSummary;sariya varla*/


/*okay etho import React, { useState } from 'react';
import { Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaDollarSign, FaChartLine } from 'react-icons/fa';
import './SalesSummary.css'; // Importing the CSS file

const SalesSummary = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
        setSelectedDate(date ? date.getDate() : null);
    };

    return (
        <div className="sales-summary">
            {/* First Row: Header }
            <Row className="align-items-center mb-3">
                <Col><h5>Sales Summary</h5></Col>
                <Col className="text-end">
                    <DatePicker 
                        selected={startDate} 
                        onChange={handleDateChange} 
                        customInput={<Button variant="outline-secondary">Select Date Range</Button>} 
                    />
                </Col>
            </Row>

            {/* Second Row: Sales Info }
            <Row className="mb-3">
                <Col>
                    <div className="sales-info d-flex align-items-center">
                        <FaDollarSign className="sales-icon" />
                        <div className="ms-2">
                            <p>Total Sales</p>
                            <h4>AED 0.00</h4>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="sales-info d-flex align-items-center">
                        <FaChartLine className="sales-icon" />
                        <div className="ms-2">
                            <p>Avg Sales Per Day</p>
                            <h4>AED 0.00</h4>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Third Row: Graph}
            <div className="graph">
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="graph-container">
                            <div className="graph-line">
                                {Array.from({ length: 31 }, (_, i) => (
                                    <OverlayTrigger
                                        key={i}
                                        placement="top"
                                        overlay={<Tooltip>Sales: 0</Tooltip>}
                                    >
                                        <span
                                            className={`graph-point ${selectedDate === i + 1 ? 'selected' : ''}`}
                                            onClick={() => setSelectedDate(i + 1)}
                                        >
                                            {i + 1}
                                        </span>
                                    </OverlayTrigger>
                                ))}
                            </div>
                            {selectedDate !== null && (
                                <div
                                    className="dotted-line"
                                    style={{ left: `${(selectedDate - 1) * (100 / 30)}%` }}
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SalesSummary;etho okay grap line problem*/



import React, { useState } from 'react';
import { Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaDollarSign, FaChartLine } from 'react-icons/fa';
import './SalesSummary.css'; // Importing the CSS file

const SalesSummary = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
        setSelectedDate(date ? date.getDate() : null);
    };

    return (
        <div className="sales-summary">
            {/* First Row: Header */}
            <Row className="align-items-center mb-3">
                <Col><h5>Sales Summary</h5></Col>
                <Col className="text-end">
                    <DatePicker 
                        selected={startDate} 
                        onChange={handleDateChange} 
                        customInput={<Button variant="outline-secondary">Select Date Range</Button>} 
                    />
                </Col>
            </Row>

            {/* Second Row: Sales Info */}
            <Row className="mb-3">
                <Col>
                    <div className="sales-info d-flex align-items-center">
                        <FaDollarSign className="sales-icon" />
                        <div className="ms-2">
                            <p>Total Sales</p>
                            <h4> 0.00</h4>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="sales-info d-flex align-items-center">
                        <FaChartLine className="sales-icon" />
                        <div className="ms-2">
                            <p>Avg Sales Per Day</p>
                            <h4> 0.00</h4>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Graph */}
            <div className="graph">
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="graph-container">
                            {selectedDate !== null && (
                                <div
                                    className="dotted-line"
                                    style={{ left: `${(selectedDate - 1) * (100 / 30)}%` }}
                                />
                            )}
                            <div className="graph-line">
                                {Array.from({ length: 31 }, (_, i) => (
                                    <OverlayTrigger
                                        key={i}
                                        placement="top"
                                        overlay={<Tooltip>Sales: 0</Tooltip>}
                                    >
                                        <span
                                            className={`graph-point ${selectedDate === i + 1 ? 'selected' : ''}`}
                                            onClick={() => setSelectedDate(i + 1)}
                                        >
                                            {i + 1}
                                        </span>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SalesSummary;
