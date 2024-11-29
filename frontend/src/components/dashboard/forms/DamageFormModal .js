/*good without db import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications
import './DamageFormModal.css';

const DamageFormModal = ({ isOpen, onRequestClose, onSubmit, damage }) => {
    const [formData, setFormData] = useState({
        date: '',
        refNo: '',
        status: '',
        customerName: '', // Updated field
    });

    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    useEffect(() => {
        if (damage && isOpen) {
            // Pre-fill the form data
            setFormData({
                date: damage.date.split('T')[0],
                refNo: damage.refNo,
                status: damage.status,
                customerName: damage.customerName, // Updated field
            });

            // Pre-fill the rows
            setRows(damage.products.map(product => ({
                product: product.product,
                unitCost: product.unitCost,
                qty: product.qty,
                discount: product.discount,
                taxes: product.taxes,
                subtotal: product.subtotal,
                note: product.note
            })));
        }
    }, [damage, isOpen]);

    const handleAddRow = () => {
        if (rows.some(row => Object.values(row).some(value => value !== ''))) {
            setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
        } else {
            toast.warn('Please fill in the current row before adding a new one.');
        }
    };

    const handleRemoveRow = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
    };

    const calculateSubtotal = (unitCost, qty, discount, taxes) => {
        const cost = parseFloat(unitCost) || 0;
        const quantity = parseFloat(qty) || 0;
        const discountPercentage = parseFloat(discount) || 0;
        const isExclusive = taxes === 'exclusive';

        let subtotal = cost * quantity;
        if (discountPercentage > 0) {
            subtotal -= (subtotal * (discountPercentage / 100));
        }
        if (isExclusive) {
            subtotal += (subtotal * 0.05); // Add 5% tax
        }
        return subtotal.toFixed(2);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                const updatedRow = { ...row, [name]: value };
                if (name === 'unitCost' || name === 'qty' || name === 'discount' || name === 'taxes') {
                    updatedRow.subtotal = calculateSubtotal(updatedRow.unitCost, updatedRow.qty, updatedRow.discount, updatedRow.taxes);
                }
                return updatedRow;
            }
            return row;
        });
        setRows(updatedRows);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { date, refNo, status, customerName } = formData; // Updated field

        // Validate presence of required fields
        if (!date || !refNo || !status || !customerName) { // Updated field
            toast.error("Please fill in all required fields.");
            return;
        }

        // Validate that rows are not empty
        if (rows.some(row => !row.product || !row.unitCost || !row.qty)) {
            toast.error("Please fill in all required fields for each product.");
            return;
        }

        // Construct the damage data object
        const damageData = {
            date,
            refNo,
            status,
            customerName, // Updated field
            products: rows.map(row => ({
                product: row.product,
                unitCost: parseFloat(row.unitCost) || 0,
                qty: parseFloat(row.qty) || 0,
                discount: parseFloat(row.discount) || 0,
                taxes: row.taxes,
                subtotal: parseFloat(row.subtotal) || 0,
                note: row.note,
            }))
        };

        try {
            const response = await fetch('/api/v1/damages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(damageData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Damage saved successfully!');
                setRows([{ product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]); // Reset rows
                setFormData({
                    date: '',
                    refNo: '',
                    status: '',
                    customerName: '', // Updated field
                }); // Reset form fields
                onSubmit(damageData);
                onRequestClose();
            } else {
                toast.error(`Error: ${data.error || 'An unexpected error occurred'}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="damage-modal"
            overlayClassName="damage-modal-overlay"
            contentLabel="Damage Form"
        >
            <h2>{damage ? 'Edit Damage' : 'Add Damage'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input
                            type="text"
                            id="refNo"
                            name="refNo"
                            value={formData.refNo}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="customerName">Customer Name</label>
                        <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            value={formData.customerName} // Updated field
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="damage-table-section">
                    <table className="damage-table">
                        <thead>
                            <tr>
                                <th className="product-col">Product</th>
                                <th className="unit-cost-col">Unit Cost</th>
                                <th className="qty-col">Qty</th>
                                <th className="discount-col">Discount (%)</th>
                                <th className="taxes-col">Taxes</th>
                                <th className="subtotal-col">Subtotal</th>
                                <th className="note-col">Note</th>
                                <th className="actions-col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td className="product-col">
                                        <textarea
                                            name="product"
                                            value={row.product}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    </td>
                                    <td className="unit-cost-col">
                                        <input
                                            type="number"
                                            name="unitCost"
                                            value={row.unitCost}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    </td>
                                    <td className="qty-col">
                                        <input
                                            type="number"
                                            name="qty"
                                            value={row.qty}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    </td>
                                    <td className="discount-col">
                                        <input
                                            type="number"
                                            name="discount"
                                            value={row.discount}
                                            onChange={(e) => handleChange(e, index)}
                                            placeholder="0"
                                        />
                                    </td>
                                    <td className="taxes-col">
                                        <select
                                            name="taxes"
                                            value={row.taxes}
                                            onChange={(e) => handleChange(e, index)}
                                        >
                                            <option value="exclusive">Exclusive</option>
                                            <option value="inclusive">Inclusive</option>
                                        </select>
                                    </td>
                                    <td className="subtotal-col">
                                        <input
                                            type="text"
                                            name="subtotal"
                                            value={row.subtotal}
                                            readOnly
                                        />
                                    </td>
                                    <td className="note-col">
                                        <textarea
                                            name="note"
                                            value={row.note}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </td>
                                    <td className="actions-col">
                                        <button type="button" onClick={() => handleRemoveRow(index)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" onClick={handleAddRow}>
                        Add Row
                    </button>
                </div>

                <div className="form-buttons">
                    <button type="submit">
                        {damage ? 'Update Damage' : 'Add Damage'}
                    </button>
                    <button type="button" onClick={onRequestClose} className="cancel-button">
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default DamageFormModal;*/

/*good double time import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import './DamageFormModal.css';

const DamageFormModal = ({ isOpen, onRequestClose, onSubmit, damage }) => {
    const [formData, setFormData] = useState({
        id: '', // Added id field for editing
        date: '',
        refNo: '',
        status: '',
        customerName: '',
    });

    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    useEffect(() => {
    if (damage && isOpen) {
        console.log('Editing damage:', damage); // Debugging line
        setFormData({
            id: damage._id,
            date: damage.date.split('T')[0],
            refNo: damage.refNo,
            status: damage.status,
            customerName: damage.customerName,
        });

        setRows(damage.products.map(product => ({
            product: product.product,
            unitCost: product.unitCost,
            qty: product.qty,
            discount: product.discount,
            taxes: product.taxes,
            subtotal: product.subtotal,
            note: product.note
        })));
    }
}, [damage, isOpen]);


  /*  useEffect(() => {
        if (damage && isOpen) {
            // Pre-fill the form data
            setFormData({
                id: damage._id, // Set id for editing
                date: damage.date.split('T')[0],
                refNo: damage.refNo,
                status: damage.status,
                customerName: damage.customerName,
            });

            // Pre-fill the rows
            setRows(damage.products.map(product => ({
                product: product.product,
                unitCost: product.unitCost,
                qty: product.qty,
                discount: product.discount,
                taxes: product.taxes,
                subtotal: product.subtotal,
                note: product.note
            })));
        }
    }, [damage, isOpen]);*/

/* const handleAddRow = () => {
        if (rows.some(row => Object.values(row).some(value => value !== ''))) {
            setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
        } else {
            toast.warn('Please fill in the current row before adding a new one.');
        }
    };

    const handleRemoveRow = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
    };

    const calculateSubtotal = (unitCost, qty, discount, taxes) => {
        const cost = parseFloat(unitCost) || 0;
        const quantity = parseFloat(qty) || 0;
        const discountPercentage = parseFloat(discount) || 0;
        const isExclusive = taxes === 'exclusive';

        let subtotal = cost * quantity;
        if (discountPercentage > 0) {
            subtotal -= (subtotal * (discountPercentage / 100));
        }
        if (isExclusive) {
            subtotal += (subtotal * 0.05); // Add 5% tax
        }
        return subtotal.toFixed(2);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                const updatedRow = { ...row, [name]: value };
                if (name === 'unitCost' || name === 'qty' || name === 'discount' || name === 'taxes') {
                    updatedRow.subtotal = calculateSubtotal(updatedRow.unitCost, updatedRow.qty, updatedRow.discount, updatedRow.taxes);
                }
                return updatedRow;
            }
            return row;
        });
        setRows(updatedRows);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData); // Debugging line
        console.log('Rows data:', rows); // Debugging line
        const { date, refNo, status, customerName, id } = formData;

        if (!date || !refNo || !status || !customerName) {
            toast.error("Please fill in all required fields.");
            return;
        }

        if (rows.some(row => !row.product || !row.unitCost || !row.qty)) {
            toast.error("Please fill in all required fields for each product.");
            return;
        }

        const damageData = {
            date,
            refNo,
            status,
            customerName,
            products: rows.map(row => ({
                product: row.product,
                unitCost: parseFloat(row.unitCost) || 0,
                qty: parseFloat(row.qty) || 0,
                discount: parseFloat(row.discount) || 0,
                taxes: row.taxes,
                subtotal: parseFloat(row.subtotal) || 0,
                note: row.note,
            }))
        };

        try {
            const method = id ? 'PUT' : 'POST';
            const url = id ? `/api/v1/damages/${id}` : '/api/v1/damages';
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(damageData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success(id ? 'Damage updated successfully!' : 'Damage saved successfully!');
                setRows([{ product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
                setFormData({
                    date: '',
                    refNo: '',
                    status: '',
                    customerName: '',
                });
                onSubmit(damageData);
                onRequestClose();
            } else {
                toast.error(`Error: ${data.error || 'An unexpected error occurred'}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="damage-modal"
            overlayClassName="damage-modal-overlay"
            contentLabel="Damage Form"
        >
            <h2>{damage ? 'Edit Damage' : 'Add Damage'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input
                            type="text"
                            id="refNo"
                            name="refNo"
                            value={formData.refNo}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="customerName">Customer Name</label>
                        <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>

                <div className="damage-table-section">
                    <table className="damage-table">
                        <thead>
                            <tr>
                                <th className="product-col">Product</th>
                                <th className="unit-cost-col">Unit Cost</th>
                                <th className="qty-col">Qty</th>
                                <th className="discount-col">Discount (%)</th>
                                <th className="taxes-col">Taxes</th>
                                <th className="subtotal-col">Subtotal</th>
                                <th className="note-col">Note</th>
                                <th className="actions-col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td className="product-col">
                                        <textarea
                                            name="product"
                                            value={row.product}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    </td>
                                    <td className="unit-cost-col">
                                        <input
                                            type="number"
                                            name="unitCost"
                                            value={row.unitCost}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    </td>
                                    <td className="qty-col">
                                        <input
                                            type="number"
                                            name="qty"
                                            value={row.qty}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    </td>
                                    <td className="discount-col">
                                        <input
                                            type="number"
                                            name="discount"
                                            value={row.discount}
                                            onChange={(e) => handleChange(e, index)}
                                            placeholder="0"
                                        />
                                    </td>
                                    <td className="taxes-col">
                                        <select
                                                                                      name="taxes"
                                                                                      value={row.taxes}
                                                                                      onChange={(e) => handleChange(e, index)}
                                                                                  >
                                                                                      <option value="exclusive">Exclusive</option>
                                                                                      <option value="inclusive">Inclusive</option>
                                                                                  </select>
                                                                              </td>
                                                                              <td className="subtotal-col">
                                                                                  <input
                                                                                      type="text"
                                                                                      name="subtotal"
                                                                                      value={row.subtotal}
                                                                                      readOnly
                                                                                  />
                                                                              </td>
                                                                              <td className="note-col">
                                                                                  <textarea
                                                                                      name="note"
                                                                                      value={row.note}
                                                                                      onChange={(e) => handleChange(e, index)}
                                                                                  />
                                                                              </td>
                                                                              <td className="actions-col">
                                                                                  <button type="button" onClick={() => handleRemoveRow(index)}>
                                                                                      Remove
                                                                                  </button>
                                                                              </td>
                                                                          </tr>
                                                                      ))}
                                                                  </tbody>
                                                              </table>
                                                              <button type="button" onClick={handleAddRow}>
                                                                  Add Row
                                                              </button>
                                                          </div>
                                          
                                                          <div className="form-buttons">
                                                              <button type="submit">
                                                                  {damage ? 'Update Damage' : 'Add Damage'}
                                                              </button>
                                                              <button type="button" onClick={onRequestClose} className="cancel-button">
                                                                  Cancel
                                                              </button>
                                                          </div>
                                                      </form>
                                                  </Modal>
                                              );
                                          };
                                          
                                          export default DamageFormModal;*/

/*import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "./DamageFormModal.css";

const DamageFormModal = ({ isOpen, onRequestClose, onSubmit, damage }) => {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    refNo: "",
    status: "",
    customerName: "",
  });

  const [rows, setRows] = useState([
    {
      product: "",
      unitCost: "",
      qty: "",
      discount: "",
      taxes: "",
      subtotal: "",
      note: "",
    },
  ]);

  useEffect(() => {
    if (damage && isOpen) {
      setFormData({
        id: damage._id,
        date: damage.date.split("T")[0],
        refNo: damage.refNo,
        status: damage.status,
        customerName: damage.customerName,
      });

      setRows(
        damage.products.map((product) => ({
          product: product.product,
          unitCost: product.unitCost,
          qty: product.qty,
          discount: product.discount,
          taxes: product.taxes,
          subtotal: product.subtotal,
          note: product.note,
        }))
      );
    }
  }, [damage, isOpen]);

  const handleAddRow = () => {
    if (rows.some((row) => Object.values(row).some((value) => value !== ""))) {
      setRows([
        ...rows,
        {
          product: "",
          unitCost: "",
          qty: "",
          discount: "",
          taxes: "",
          subtotal: "",
          note: "",
        },
      ]);
    } else {
      toast.warn("Please fill in the current row before adding a new one.");
    }
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const calculateSubtotal = (unitCost, qty, discount, taxes) => {
    const cost = parseFloat(unitCost) || 0;
    const quantity = parseFloat(qty) || 0;
    const discountPercentage = parseFloat(discount) || 0;
    const isExclusive = taxes === "exclusive";

    let subtotal = cost * quantity;
    if (discountPercentage > 0) {
      subtotal -= subtotal * (discountPercentage / 100);
    }
    if (isExclusive) {
      subtotal += subtotal * 0.05; // Add 5% tax
    }
    return subtotal.toFixed(2);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        const updatedRow = { ...row, [name]: value };
        if (
          name === "unitCost" ||
          name === "qty" ||
          name === "discount" ||
          name === "taxes"
        ) {
          updatedRow.subtotal = calculateSubtotal(
            updatedRow.unitCost,
            updatedRow.qty,
            updatedRow.discount,
            updatedRow.taxes
          );
        }
        return updatedRow;
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { date, refNo, status, customerName, id } = formData;

    if (!date || !refNo || !status || !customerName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (rows.some((row) => !row.product || !row.unitCost || !row.qty)) {
      toast.error("Please fill in all required fields for each product.");
      return;
    }

    const damageData = {
      date,
      refNo,
      status,
      customerName,
      products: rows.map((row) => ({
        product: row.product,
        unitCost: parseFloat(row.unitCost) || 0,
        qty: parseFloat(row.qty) || 0,
        discount: parseFloat(row.discount) || 0,
        taxes: row.taxes,
        subtotal: parseFloat(row.subtotal) || 0,
        note: row.note,
      })),
    };

    try {
      const method = id ? "PUT" : "POST";
      const url = id ? `/api/v1/damages/${id}` : "/api/v1/damages";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(damageData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          id ? "Damage updated successfully!" : "Damage saved successfully!"
        );
        setRows([
          {
            product: "",
            unitCost: "",
            qty: "",
            discount: "",
            taxes: "",
            subtotal: "",
            note: "",
          },
        ]);
        setFormData({
          date: "",
          refNo: "",
          status: "",
          customerName: "",
        });
        onSubmit(damageData);
        onRequestClose();
      } else {
        toast.error(`Error: ${data.error || "An unexpected error occurred"}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="damage-modal"
      overlayClassName="damage-modal-overlay"
      contentLabel="Damage Form"
    >
      <h2>{damage ? "Edit Damage" : "Add Damage"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="refNo">Reference No</label>
            <input
              type="text"
              id="refNo"
              name="refNo"
              value={formData.refNo}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleFormChange}
              required
            >
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>

        <div className="damage-table-section">
          <table className="damage-table">
            <thead>
              <tr>
                <th className="product-col">Product</th>
                <th className="unit-cost-col">Unit Cost</th>
                <th className="qty-col">Qty</th>
                <th className="discount-col">Discount (%)</th>
                <th className="taxes-col">Taxes</th>
                <th className="subtotal-col">Subtotal</th>
                <th className="note-col">Note</th>
                <th className="actions-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="product-col">
                    <textarea
                      name="product"
                      value={row.product}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </td>
                  <td className="unit-cost-col">
                    <input
                      type="number"
                      name="unitCost"
                      value={row.unitCost}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </td>
                  <td className="qty-col">
                    <input
                      type="number"
                      name="qty"
                      value={row.qty}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </td>
                  <td className="discount-col">
                    <input
                      type="number"
                      name="discount"
                      value={row.discount}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="0"
                    />
                  </td>
                  <td className="taxes-col">
                    <select
                      name="taxes"
                      value={row.taxes}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option value="exclusive">Exclusive</option>
                      <option value="inclusive">Inclusive</option>
                    </select>
                  </td>
                  <td className="subtotal-col">
                    <input
                      type="text"
                      name="subtotal"
                      value={row.subtotal}
                      readOnly
                    />
                  </td>
                  <td className="note-col">
                    <textarea
                      name="note"
                      value={row.note}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </td>
                  <td className="actions-col">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow}>
            Add Row
          </button>
        </div>

        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DamageFormModal;*/

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "./DamageFormModal.css";

const DamageFormModal = ({ isOpen, onRequestClose, onSubmit, damage }) => {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    refNo: "",
    status: "",
    customerName: "",
    storeName: "", // Added storeName field
  });

  const [rows, setRows] = useState([
    {
      product: "",
      unitCost: "",
      qty: "",
      discount: "",
      taxes: "",
      subtotal: "",
      note: "",
    },
  ]);

  const [stores, setStores] = useState([]); // To hold the fetched stores

  // Fetch stores from the API and populate the dropdown
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/stores");
        const data = await response.json();
        setStores(data); // Save fetched stores in state
        console.log("Fetched stores:", data); // Console log for debugging
      } catch (error) {
        console.error("Error fetching stores:", error);
        toast.error("Failed to load stores.");
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    if (damage && isOpen) {
      setFormData({
        id: damage._id,
        date: damage.date.split("T")[0],
        refNo: damage.refNo,
        status: damage.status,
        customerName: damage.customerName,
        storeName: damage.storeName || "", // Pre-fill storeName if available
      });

      setRows(
        damage.products.map((product) => ({
          product: product.product,
          unitCost: product.unitCost,
          qty: product.qty,
          discount: product.discount,
          taxes: product.taxes,
          subtotal: product.subtotal,
          note: product.note,
        }))
      );
    }
  }, [damage, isOpen]);

  const handleAddRow = () => {
    if (rows.some((row) => Object.values(row).some((value) => value !== ""))) {
      setRows([
        ...rows,
        {
          product: "",
          unitCost: "",
          qty: "",
          discount: "",
          taxes: "",
          subtotal: "",
          note: "",
        },
      ]);
    } else {
      toast.warn("Please fill in the current row before adding a new one.");
    }
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const calculateSubtotal = (unitCost, qty, discount, taxes) => {
    const cost = parseFloat(unitCost) || 0;
    const quantity = parseFloat(qty) || 0;
    const discountPercentage = parseFloat(discount) || 0;
    const isExclusive = taxes === "exclusive";

    let subtotal = cost * quantity;
    if (discountPercentage > 0) {
      subtotal -= subtotal * (discountPercentage / 100);
    }
    if (isExclusive) {
      subtotal += subtotal * 0.05; // Add 5% tax
    }
    return subtotal.toFixed(2);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        const updatedRow = { ...row, [name]: value };
        if (
          name === "unitCost" ||
          name === "qty" ||
          name === "discount" ||
          name === "taxes"
        ) {
          updatedRow.subtotal = calculateSubtotal(
            updatedRow.unitCost,
            updatedRow.qty,
            updatedRow.discount,
            updatedRow.taxes
          );
        }
        return updatedRow;
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { date, refNo, status, customerName, storeName, id } = formData;

    if (!date || !refNo || !status || !customerName || !storeName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (rows.some((row) => !row.product || !row.unitCost || !row.qty)) {
      toast.error("Please fill in all required fields for each product.");
      return;
    }

    const damageData = {
      date,
      refNo,
      status,
      customerName,
      storeName,
      products: rows.map((row) => ({
        product: row.product,
        unitCost: parseFloat(row.unitCost) || 0,
        qty: parseFloat(row.qty) || 0,
        discount: parseFloat(row.discount) || 0,
        taxes: row.taxes,
        subtotal: parseFloat(row.subtotal) || 0,
        note: row.note,
      })),
    };

    try {
      const method = id ? "PUT" : "POST";
      const url = id ? `/api/v1/damages/${id}` : "/api/v1/damages";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(damageData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          id ? "Damage updated successfully!" : "Damage saved successfully!"
        );
        setRows([
          {
            product: "",
            unitCost: "",
            qty: "",
            discount: "",
            taxes: "",
            subtotal: "",
            note: "",
          },
        ]);
        setFormData({
          date: "",
          refNo: "",
          status: "",
          customerName: "",
          storeName: "",
        });
        onSubmit(damageData);
        onRequestClose();
      } else {
        toast.error(`Error: ${data.error || "An unexpected error occurred"}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="damage-modal"
      overlayClassName="damage-modal-overlay"
      contentLabel="Damage Form"
    >
      <h2>{damage ? "Edit Damage" : "Add Damage"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="refNo">Reference No</label>
            <input
              type="text"
              id="refNo"
              name="refNo"
              value={formData.refNo}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleFormChange}
              required
            >
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="storeName">Store Name</label>
            <select
              id="storeName"
              name="storeName"
              value={formData.storeName}
              onChange={handleFormChange}
              required
            >
              <option value="">Select Store</option>
              {stores.map((store) => (
                <option key={store._id} value={store.name}>
                  {store.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="damage-table-section">
          <table className="damage-table">
            <thead>
              <tr>
                <th className="product-col">Product</th>
                <th className="unit-cost-col">Unit Cost</th>
                <th className="qty-col">Qty</th>
                <th className="discount-col">Discount (%)</th>
                <th className="taxes-col">Taxes</th>
                <th className="subtotal-col">Subtotal</th>
                <th className="note-col">Note</th>
                

                <th className="action-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="product"
                      value={row.product}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="unitCost"
                      value={row.unitCost}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="qty"
                      value={row.qty}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="discount"
                      value={row.discount}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </td>
                  <td>
                    <select
                      name="taxes"
                      value={row.taxes}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option value="exclusive">Exclusive</option>
                      <option value="inclusive">Inclusive</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="subtotal"
                      value={row.subtotal}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="note"
                      value={row.note}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleRemoveRow(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow}>
            Add Product
          </button>
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={onRequestClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default DamageFormModal;
