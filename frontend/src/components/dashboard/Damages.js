/*import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Damages.css'; // Assuming you have a CSS file for specific styling
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from React Bootstrap

const Damages = () => {
    return (
        <div className="damages-page">
            <DashboardSidebar />
            <div className="damages-content">
                <div className="damages-header">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className="filter-button">
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className="export-button">
                            Export
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <i className="bi bi-printer"></i> Print
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <i className="bi bi-file-earmark-excel"></i> XLS
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <button className="btn btn-danger add-damage-button">Add Damage</button>
                </div>

                <div className="damages-card">
                    <table className="table table-bordered table-transparent damages-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Total</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>$100</td>
                                <td>Sample Note</td>
                                <td>
                                    <button className="btn btn-success btn-sm action-button">Edit</button>
                                    <button className="btn btn-danger btn-sm action-button">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Damages;*/

/*import React from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap

const Damages = () => {
  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button">
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive  table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-08-26</td>
                <td>12345</td>
                <td>$100</td>
                <td>Sample Note</td>
                <td>
                  <button className="btn btn-success btn-sm action-button">
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm action-button">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed }
            </tbody>
          </table>
          <div className="table-footer">Showing 1 to 1 of 1 entries</div>
        </div>
      </div>
    </div>
  );
};

export default Damages;*/


/*without db import React, { useState } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import DamageFormModal from "./forms/DamageFormModal .js"; // Import the DamageFormModal

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const handleAddDamageClick = () => {
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = (damageData) => {
    console.log("Damage data submitted:", damageData);
    // You can make a POST request to your backend here to save the damage data
    setIsModalOpen(false); // Close the modal after successful submit
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-08-26</td>
                <td>12345</td>
                <td>$100</td>
                <td>Sample Note</td>
                <td>
                  <button className="btn btn-success btn-sm action-button">
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm action-button">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed }
            </tbody>
          </table>
          <div className="table-footer">Showing 1 to 1 of 1 entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
      />
    </div>
  );
};

export default Damages;good without db*/


/*not displaying import React, { useState } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal '; // Import the DamageFormModal

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const handleAddDamageClick = () => {
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = (damageData) => {
    console.log("Damage data submitted:", damageData);
    // You can make a POST request to your backend here to save the damage data
    setIsModalOpen(false); // Close the modal after successful submit
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-08-26</td>
                <td>12345</td>
                <td>$100</td>
                <td>Sample Note</td>
                <td>
                  <button className="btn btn-success btn-sm action-button">
                    <FaEdit />
                  </button>
                  <button className="btn btn-danger btn-sm action-button">
                    <FaTrashAlt />
                  </button>
                  <button className="btn btn-info btn-sm action-button">
                    <FaEye />
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed}
            </tbody>
          </table>
          <div className="table-footer">Showing 1 to 1 of 1 entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
      />
    </div>
  );
};

export default Damages;*/





/*good not showing import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal ' // Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited

  // Fetch damages from the backend when component mounts
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        const response = await fetch('/api/v1/damages');
        const data = await response.json();
        setDamages(data.damages); // Assuming the API returns an object with a damages array
      } catch (error) {
        console.error('Error fetching damages:', error);
      }
    };

    fetchDamages();
  }, []);

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      if (currentDamage) {
        // If editing, make a PUT request
        const response = await fetch(`/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages(damages.map(damage => damage._id === currentDamage._id ? result.damage : damage));
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        const response = await fetch('/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages([...damages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }
      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <tr key={damage._id}>
                  <td>{damage.date}</td>
                  <td>{damage.refNo}</td>
                  <td>{damage.customerName}</td>
                  <td>{damage.productName}</td>
                  <td>{damage.qty}</td>
                  <td>${damage.total}</td>
                  <td>{damage.note}</td>
                  <td>
                    <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                      <FaTrashAlt />
                    </button>
                    <button className="btn btn-info btn-sm action-button">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component}
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />
      <ToastContainer /> {/* Add this line }
    </div>
  );
};

export default Damages;good not shoing products*/





/*ok not pimport React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal '; // Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle damage details

  // Fetch damages from the backend when component mounts
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        const response = await fetch('/api/v1/damages');
        const data = await response.json();
        if (data.success) {
          setDamages(data.damages); // Assuming the API returns an object with a damages array
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchDamages();
  }, []);

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      if (currentDamage) {
        // If editing, make a PUT request
        const response = await fetch(`/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages(damages.map(damage => damage._id === currentDamage._id ? result.damage : damage));
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        const response = await fetch('/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages([...damages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }
      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <tr key={damage._id}>
                  <td>{damage.date}</td>
                  <td>{damage.refNo}</td>
                  <td>{damage.customerName}</td>
                  <td>{damage.productName}</td>
                  <td>{damage.qty}</td>
                  <td>${damage.total}</td>
                  <td>{damage.note}</td>
                  <td>
                    <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(damage)}>
                      <FaEye />
                    </button>
                    <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />

      {/* Detail Modal }
      <Modal
        isOpen={isDetailModalOpen}
        onRequestClose={closeDetailModal}
        className="detail-modal"
        overlayClassName="detail-modal-overlay"
        contentLabel="Damage Details"
      >
        <h2>Damage Details</h2>
        {detailData && (
          <div className="detail-content">
            <p><strong>Product Name:</strong> {detailData.productName}</p>
            <p><strong>Quantity:</strong> {detailData.qty}</p>
            <p><strong>Note:</strong> {detailData.note}</p>
            <p><strong>Total:</strong> ${detailData.total}</p>
          </div>
        )}
        <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer /> {/* Add this line }
    </div>
  );
};

export default Damages;*/



/*finalimport React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal ';// Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle damage details

  // Fetch damages from the backend when component mounts
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        const response = await fetch('/api/v1/damages');
        const data = await response.json();
        if (data.success) {
          setDamages(data.damages); // Assuming the API returns an object with a damages array
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchDamages();
  }, []);

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      if (currentDamage) {
        // If editing, make a PUT request
        const response = await fetch(`/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages(damages.map(damage => damage._id === currentDamage._id ? result.damage : damage));
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        const response = await fetch('/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages([...damages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }
      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <React.Fragment key={damage._id}>
                  {damage.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={damage.products.length}>{new Date(damage.date).toLocaleDateString()}</td>
                          <td rowSpan={damage.products.length}>{damage.refNo}</td>
                          <td rowSpan={damage.products.length}>{damage.customerName}</td>
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(damage)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />

      {/* Detail Modal }
      <Modal
        isOpen={isDetailModalOpen}
        onRequestClose={closeDetailModal}
        className="detail-modal"
        overlayClassName="detail-modal-overlay"
        contentLabel="Damage Details"
      >
        <h2>Damage Details</h2>
        {detailData && (
          <div className="detail-content">
            <p><strong>Product Name:</strong> {detailData.productName}</p>
            <p><strong>Quantity:</strong> {detailData.qty}</p>
            <p><strong>Note:</strong> {detailData.note}</p>
            <p><strong>Total:</strong> ${calculateTotalAmount(detailData.products)}</p>
          </div>
        )}
        <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer /> {/* Add this line }
    </div>
  );
};

export default Damages;final */

/*working with storename import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal '; // Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle damage details

  // Fetch damages from the backend when component mounts
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        const response = await fetch('/api/v1/damages');
        const data = await response.json();
        if (data.success) {
          setDamages(data.damages); // Assuming the API returns an object with a damages array
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchDamages();
  }, []);

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      if (currentDamage) {
        // If editing, make a PUT request
        const response = await fetch(`/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        const result = await response.json();
        if (result.success) {
          setDamages(damages.map(damage => damage._id === currentDamage._id ? result.damage : damage));
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        const response = await fetch('/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData) // Include storeName here
        });
        const result = await response.json();
        if (result.success) {
          setDamages([...damages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }
      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th> {/* New Store Name column }
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <React.Fragment key={damage._id}>
                  {damage.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={damage.products.length}>{new Date(damage.date).toLocaleDateString()}</td>
                          <td rowSpan={damage.products.length}>{damage.refNo}</td>
                          <td rowSpan={damage.products.length}>{damage.customerName}</td>
                          <td rowSpan={damage.products.length}>{damage.storeName}</td> {/* Display Store Name }
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(damage)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))} 
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />

      {/* Detail Modal }
      <Modal
        isOpen={isDetailModalOpen}
        onRequestClose={closeDetailModal}
        className="detail-modal"
        overlayClassName="detail-modal-overlay"
        contentLabel="Damage Details"
      >
        <h2>Damage Details</h2>
        {detailData && (
          <div className="detail-content">
            <p><strong>Product Name:</strong> {detailData.productName}</p>
            <p><strong>Quantity:</strong> {detailData.qty}</p>
            <p><strong>Note:</strong> {detailData.note}</p>
            <p><strong>Total:</strong> ${calculateTotalAmount(detailData.products)}</p>
          </div>
        )}
        <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer /> {/* Add this line }
    </div>
  );
};

export default Damages;working with storeName*/

/*final with storename import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal '; // Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle damage details

  // Fetch damages from the backend when component mounts
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        const response = await fetch('/api/v1/damages');
        const data = await response.json();
        if (data.success) {
          setDamages(data.damages); // Assuming the API returns an object with a damages array
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchDamages();
  }, []);

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      let response, result;

      if (currentDamage) {
        // If editing, make a PUT request
        response = await fetch(`/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        result = await response.json();
        if (result.success) {
          setDamages(prevDamages => 
            prevDamages.map(damage => 
              damage._id === currentDamage._id ? result.damage : damage
            )
          );
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        result = await response.json();
        if (result.success) {
          setDamages(prevDamages => [...prevDamages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th> {/* New Store Name column }
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <React.Fragment key={damage._id}>
                  {damage.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={damage.products.length}>{new Date(damage.date).toLocaleDateString()}</td>
                          <td rowSpan={damage.products.length}>{damage.refNo}</td>
                          <td rowSpan={damage.products.length}>{damage.customerName}</td>
                          <td rowSpan={damage.products.length}>{damage.storeName}</td> {/* Display Store Name }
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(damage)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))} 
                </React.Fragment>
              ))} 
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />

      {/* Detail Modal }
      <Modal
        isOpen={isDetailModalOpen}
        onRequestClose={closeDetailModal}
        className="detail-modal"
        overlayClassName="detail-modal-overlay"
        contentLabel="Damage Details"
      >
        <h2>Damage Details</h2>
        {detailData && (
          <div className="detail-content">
            <p><strong>Product Name:</strong> {detailData.productName}</p>
            <p><strong>Quantity:</strong> {detailData.qty}</p>
            <p><strong>Note:</strong> {detailData.note}</p>
            <p><strong>Total:</strong> ${calculateTotalAmount(detailData.products)}</p>
          </div>
        )}
        <button onClick={closeDetailModal} className="btn btn-secondary">Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Damages;final with storename*/


/*waitimport React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal '; // Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle damage details
  const { storeName } = useParams(); // Get storeName from URL parameters

  // Fetch damages from the backend when component mounts or storeName changes
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        // Adjusted to ensure proper fetching based on storeName
        const url = storeName 
          ? `/api/v1/damages?storeName=${storeName}` 
          : '/api/v1/damages'; // Fetch specific damages if storeName is present

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setDamages(data.damages); // Update state with the fetched damages
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchDamages(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      let response, result;

      if (currentDamage) {
        // If editing, make a PUT request
        response = await fetch(`/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        result = await response.json();
        if (result.success) {
          setDamages(prevDamages => 
            prevDamages.map(damage => 
              damage._id === currentDamage._id ? result.damage : damage
            )
          );
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        result = await response.json();
        if (result.success) {
          setDamages(prevDamages => [...prevDamages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th> {/* New Store Name column }
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <React.Fragment key={damage._id}>
                  {damage.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={damage.products.length}>{new Date(damage.date).toLocaleDateString()}</td>
                          <td rowSpan={damage.products.length}>{damage.refNo}</td>
                          <td rowSpan={damage.products.length}>{damage.customerName}</td>
                          <td rowSpan={damage.products.length}>{damage.storeName}</td> {/* Display Store Name }
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(damage)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))} 
                </React.Fragment>
              ))} 
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component }
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />

      {/* Detail Modal }
      <Modal
        isOpen={isDetailModalOpen}
        onRequestClose={closeDetailModal}
        contentLabel="Damage Details"
      >
        <h2>Damage Details</h2>
        {detailData && (
          <div>
            <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
            <p><strong>Reference No:</strong> {detailData.refNo}</p>
            <p><strong>Customer Name:</strong> {detailData.customerName}</p>
            <p><strong>Store Name:</strong> {detailData.storeName}</p> {/* Display Store Name in detail }
            <h4>Products</h4>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>
                  {product.product} - Qty: {product.qty} - Subtotal: ${product.subtotal}
                </li>
              ))}
            </ul>
            <p><strong>Total Amount:</strong> ${calculateTotalAmount(detailData.products)}</p>
            <button onClick={closeDetailModal} className="btn btn-secondary">Close</button>
          </div>
        )}
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Damages;*/



import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Damages.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import DamageFormModal from './forms/DamageFormModal '; // Import the DamageFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Damages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [damages, setDamages] = useState([]); // State to handle the list of damages
  const [currentDamage, setCurrentDamage] = useState(null); // State to handle the damage being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle damage details
  const { storeName } = useParams(); // Get storeName from URL parameters

  // Fetch damages from the backend when component mounts or storeName changes
  useEffect(() => {
    const fetchDamages = async () => {
      try {
        // Construct the full URL based on the storeName
        const url = storeName 
          ? `http://localhost:5000/api/v1/damages/${storeName}`  // Use path segment for store-specific fetch
          : 'http://localhost:5000/api/v1/damages'; // Fetch general damages if storeName is not present

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setDamages(data.damages); // Update state with the fetched damages
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchDamages(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddDamageClick = () => {
    setCurrentDamage(null); // Reset current damage
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditDamageClick = (damage) => {
    setCurrentDamage(damage); // Set current damage for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleDamageSubmit = async (damageData) => {
    try {
      let response, result;

      if (currentDamage) {
        // If editing, make a PUT request
        response = await fetch(`http://localhost:5000/api/v1/damages/${currentDamage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        result = await response.json();
        if (result.success) {
          setDamages(prevDamages => 
            prevDamages.map(damage => 
              damage._id === currentDamage._id ? result.damage : damage
            )
          );
          toast.success('Damage updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('http://localhost:5000/api/v1/damages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(damageData)
        });
        result = await response.json();
        if (result.success) {
          setDamages(prevDamages => [...prevDamages, result.damage]);
          toast.success('Damage added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/damages/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setDamages(damages.filter(damage => damage._id !== id));
        toast.success('Damage deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="damages-page">
      <DashboardSidebar />
      <div className="damages-content">
        <div className="damages-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-damage-button" onClick={handleAddDamageClick}>
            Add Damage
          </button>
        </div>

        <div className="damages-card">
          <table className="table table-responsive table-transparent damages-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th> {/* New Store Name column */}
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {damages.map(damage => (
                <React.Fragment key={damage._id}>
                  {damage.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={damage.products.length}>{new Date(damage.date).toLocaleDateString()}</td>
                          <td rowSpan={damage.products.length}>{damage.refNo}</td>
                          <td rowSpan={damage.products.length}>{damage.customerName}</td>
                          <td rowSpan={damage.products.length}>{damage.storeName}</td> {/* Display Store Name */}
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal.toFixed(2)}</td> {/* Format total to 2 decimal places */}
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(damage)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditDamageClick(damage)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(damage._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))} 
                </React.Fragment>
              ))} 
            </tbody>
          </table>
          <div className="table-footer">Showing {damages.length} entries</div>
        </div>
      </div>

      {/* DamageFormModal component */}
      <DamageFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleDamageSubmit}
        damage={currentDamage} // Pass the current damage for editing
      />

      {/* Detail Modal for Damage */}
      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
        <h2>Damage Details</h2>
        {detailData && (
          <div>
            <p>Date: {new Date(detailData.date).toLocaleDateString()}</p>
            <p>Reference No: {detailData.refNo}</p>
            <p>Customer Name: {detailData.customerName}</p>
            <p>Store Name: {detailData.storeName}</p>
            <p>Products:</p>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>
                  {product.product} - Qty: {product.qty} - Total: ${product.subtotal.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total Amount: ${calculateTotalAmount(detailData.products).toFixed(2)}</p>
          </div>
        )}
        <button onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Damages;









