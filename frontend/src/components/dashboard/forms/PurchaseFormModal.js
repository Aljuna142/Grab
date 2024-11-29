/*// PurchaseFormModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your app element for accessibility reasons
Modal.setAppElement('#root');

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        date: '',
        refNo: '',
        status: 'pending',
        supplier: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prevState => ({ ...prevState, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add Purchase"
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Reference No:
                    <input
                        type="text"
                        name="refNo"
                        value={formData.refNo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Status:
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="pending">Pending</option>
                        <option value="order">Order</option>
                        <option value="received">Received</option>
                    </select>
                </label>
                <label>
                    Supplier:
                    <input
                        type="text"
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Attachment:
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                    />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={onRequestClose}>Close</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/
// PurchaseFormModal.js
/*GOODimport React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        date: '',
        refNo: '',
        status: 'pending',
        supplier: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prevState => ({ ...prevState, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
        onRequestClose(); // Close the modal after submission
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add Purchase"
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Reference No:
                    <input
                        type="text"
                        name="refNo"
                        value={formData.refNo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Status:
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="pending">Pending</option>
                        <option value="order">Order</option>
                        <option value="received">Received</option>
                    </select>
                </label>
                <label>
                    Supplier:
                    <input
                        type="text"
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Attachment:
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                    />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={onRequestClose}>Close</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;GOOD*/



// PurchaseFormModal.jsx
/*import React from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <label htmlFor="attachment">Attachment</label>
                <input type="file" id="attachment" name="attachment" />
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/


// PurchaseFormModal.jsx
/*import React, { useState } from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '' }]);
    };

    const handleRemoveRow = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRows = rows.map((row, i) => i === index ? { ...row, [name]: value } : row);
        setRows(updatedRows);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <label htmlFor="attachment">Attachment</label>
                <input type="file" id="attachment" name="attachment" />
                
                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Unit Cost</th>
                                <th>Qty</th>
                                <th>Discount</th>
                                <th>Taxes</th>
                                <th>Subtotal</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td><input type="text" name="product" value={row.product} onChange={(e) => handleChange(e, index)} /></td>
                                    <td><input type="number" name="unitCost" value={row.unitCost} onChange={(e) => handleChange(e, index)} /></td>
                                    <td><input type="number" name="qty" value={row.qty} onChange={(e) => handleChange(e, index)} /></td>
                                    <td><input type="number" name="discount" value={row.discount} onChange={(e) => handleChange(e, index)} /></td>
                                    <td><input type="number" name="taxes" value={row.taxes} onChange={(e) => handleChange(e, index)} /></td>
                                    <td><input type="number" name="subtotal" value={row.subtotal} onChange={(e) => handleChange(e, index)} /></td>
                                    <td>
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/



// PurchaseFormModal.jsx
/*without calculationimport React, { useState } from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '' }]);
    };

    const handleRemoveRow = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRows = rows.map((row, i) => i === index ? { ...row, [name]: value } : row);
        setRows(updatedRows);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <label htmlFor="attachment">Attachment</label>
                <input type="file" id="attachment" name="attachment" />
                
                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
                        <thead>
                            <tr>
                                <th className="product-col">Product</th>
                                <th className="unit-cost-col">Unit Cost</th>
                                <th className="qty-col">Qty</th>
                                <th className="discount-col">Discount</th>
                                <th className="taxes-col">Taxes</th>
                                <th className="subtotal-col">Subtotal</th>
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
    />           
                                    </td>
                                    <td className="unit-cost-col">
                                        <input type="number" name="unitCost" value={row.unitCost} onChange={(e) => handleChange(e, index)} />
                                    </td>
                                    <td className="qty-col">
                                        <input type="number" name="qty" value={row.qty} onChange={(e) => handleChange(e, index)} />
                                    </td>
                                    <td className="discount-col">
                                        <input type="number" name="discount" value={row.discount} onChange={(e) => handleChange(e, index)} />
                                    </td>
                                    <td className="taxes-col">
                                        <input type="number" name="taxes" value={row.taxes} onChange={(e) => handleChange(e, index)} />
                                    </td>
                                    <td className="subtotal-col">
                                        <input type="number" name="subtotal" value={row.subtotal} onChange={(e) => handleChange(e, index)} />
                                    </td>
                                    <td className="actions-col">
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/




/*import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '' }]);
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

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <label htmlFor="attachment">Attachment</label>
                <input type="file" id="attachment" name="attachment" />
                
                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
                        <thead>
                            <tr>
                                <th className="product-col">Product</th>
                                <th className="unit-cost-col">Unit Cost</th>
                                <th className="qty-col">Qty</th>
                                <th className="discount-col">Discount (%)</th>
                                <th className="taxes-col">Taxes</th>
                                <th className="subtotal-col">Subtotal</th>
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
                                        />
                                    </td>
                                    <td className="unit-cost-col">
                                        <input 
                                            type="number" 
                                            name="unitCost" 
                                            value={row.unitCost} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="qty-col">
                                        <input 
                                            type="number" 
                                            name="qty" 
                                            value={row.qty} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="discount-col">
                                        <input 
                                            type="number" 
                                            name="discount" 
                                            value={row.discount} 
                                            onChange={(e) => handleChange(e, index)} 
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
                                            type="number" 
                                            name="subtotal" 
                                            value={row.subtotal} 
                                            readOnly
                                        />
                                    </td>
                                    <td className="actions-col">
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/



/*good calimport React, { useState } from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
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

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="attachment">Attachment</label>
                        <input type="file" id="attachment" name="attachment" />
                    </div>
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus">
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                        />
                                    </td>
                                    <td className="unit-cost-col">
                                        <input 
                                            type="number" 
                                            name="unitCost" 
                                            value={row.unitCost} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="qty-col">
                                        <input 
                                            type="number" 
                                            name="qty" 
                                            value={row.qty} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="discount-col">
                                        <input 
                                            type="number" 
                                            name="discount" 
                                            value={row.discount} 
                                            onChange={(e) => handleChange(e, index)} 
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/






/*without statte import React, { useState } from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
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

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="attachment">Attachment</label>
                        <input type="file" id="attachment" name="attachment" />
                    </div>
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus">
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                        />
                                    </td>
                                    <td className="unit-cost-col">
                                        <input 
                                            type="number" 
                                            name="unitCost" 
                                            value={row.unitCost} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="qty-col">
                                        <input 
                                            type="number" 
                                            name="qty" 
                                            value={row.qty} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="discount-col">
                                        <input 
                                            type="number" 
                                            name="discount" 
                                            value={row.discount} 
                                            onChange={(e) => handleChange(e, index)} 
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;good good */




/*without db import React, { useState } from 'react';
import Modal from 'react-modal';

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Combine all rows into one single purchase data object
        const purchaseData = rows.map(row => ({
            product: row.product,
            unitCost: row.unitCost,
            qty: row.qty,
            discount: row.discount,
            taxes: row.taxes,
            subtotal: row.subtotal,
            note: row.note,
            // Add other form fields here if needed
        }));
        // Call the onSubmit callback passed from Purchases component
        onSubmit(purchaseData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="attachment">Attachment</label>
                        <input type="file" id="attachment" name="attachment" />
                    </div>
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus">
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products}
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                        />
                                    </td>
                                    <td className="unit-cost-col">
                                        <input 
                                            type="number" 
                                            name="unitCost" 
                                            value={row.unitCost} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="qty-col">
                                        <input 
                                            type="number" 
                                            name="qty" 
                                            value={row.qty} 
                                            onChange={(e) => handleChange(e, index)} 
                                        />
                                    </td>
                                    <td className="discount-col">
                                        <input 
                                            type="number" 
                                            name="discount" 
                                            value={row.discount} 
                                            onChange={(e) => handleChange(e, index)} 
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;without db*/

/*11import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
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

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form values
    const date = e.target.date.value;
    const refNo = e.target.refNo.value;
    const status = e.target.status.value;
    const supplier = e.target.supplier.value;
    const paymentStatus = e.target.paymentStatus.value;
    const attachment = e.target.attachment.files[0];

    if (!date || !refNo || !status || !supplier || !paymentStatus) {
        toast.error("Please fill in all required fields.");
        return;
    }

    const purchaseData = {
        date,
        refNo,
        status,
        supplier,
        paymentStatus,
        products: rows.map(row => ({
            product: row.product,
            unitCost: row.unitCost,
            qty: row.qty,
            discount: row.discount,
            taxes: row.taxes,
            subtotal: row.subtotal,
            note: row.note,
        }))
    };

    try {
        const formDataToSend = new FormData();
        formDataToSend.append('data', JSON.stringify(purchaseData));
        if (attachment) {
            formDataToSend.append('attachment', attachment);
        }

        const response = await fetch('/api/v1/purchases', {
            method: 'POST',
            body: formDataToSend
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Purchase saved successfully!');
            onSubmit(purchaseData);
            onRequestClose();
        } else {
            toast.error(`Error: ${data.error}`);
        }
    } catch (error) {
        toast.error(`Error: ${error.message}`);
    }
};


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" required />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status" required>
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="attachment">Attachment</label>
                        <input type="file" id="attachment" name="attachment" />
                    </div>
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus" required>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>

                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/


/*4 fields missing import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
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
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get form values
        const date = e.target.date.value;
        const refNo = e.target.refNo.value;
        const status = e.target.status.value;
        const supplier = e.target.supplier.value;
        const paymentStatus = e.target.paymentStatus.value;
        const attachment = e.target.attachment.files[0];
    
        if (!date || !refNo || !status || !supplier || !paymentStatus) {
            toast.error("Please fill in all required fields.");
            return;
        }
    
        const purchaseData = {
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
            products: rows.map(row => ({
                product: row.product,
                unitCost: row.unitCost,
                qty: row.qty,
                discount: row.discount,
                taxes: row.taxes,
                subtotal: row.subtotal,
                note: row.note,
            }))
        };
    
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('data', JSON.stringify(purchaseData));
            if (attachment) {
                formDataToSend.append('attachment', attachment);
            }
    
            const response = await fetch('/api/v1/purchases', {
                method: 'POST',
                body: formDataToSend
            });
    
            const data = await response.json();
    
            if (data.success) {
                toast.success('Purchase saved successfully!');
                onSubmit(purchaseData);
                onRequestClose();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };
    
  
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}> {/* Make sure handleSubmit is passed to onSubmit }
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" required />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status" required>
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="attachment">Attachment</label>
                        <input type="file" id="attachment" name="attachment" />
                    </div>
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus" required>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>

                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;4 fields missing*/




/*product fields not working import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get form values
        const date = e.target.date.value;
        const refNo = e.target.refNo.value;
        const status = e.target.status.value;
        const supplier = e.target.supplier.value;
        const paymentStatus = e.target.paymentStatus.value;
    
        // Validate presence of required fields
        if (!date || !refNo || !status || !supplier || !paymentStatus) {
            toast.error("Please fill in all required fields.");
            console.log('Form values:', { date, refNo, status, supplier, paymentStatus }); // Log form values
            return;
        }
    
        // Construct the purchase data object
        const purchaseData = {
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
            products: rows.map(row => ({
                product: row.product,
                unitCost: row.unitCost,
                qty: row.qty,
                discount: row.discount,
                taxes: row.taxes,
                subtotal: row.subtotal,
                note: row.note,
            }))
        };
        console.log('Purchase Data:', purchaseData); // Log purchaseData to verify
    
        try {
            // Send the request directly as JSON
            const response = await fetch('/api/v1/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            });
    
            const data = await response.json();
            console.log('Response Data:', data); // Log response data
    
            if (data.success) {
                toast.success('Purchase saved successfully!');
                onSubmit(purchaseData);
                onRequestClose();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
            console.error('Fetch Error:', error); // Log fetch errors
        }
    };
    
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" required />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status" required>
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus" required>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-button" onClick={handleAddRow}>Add Row</button>
                </div>

                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;products fields not working*/


/*goodimport React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get form values
        const date = e.target.date.value;
        const refNo = e.target.refNo.value;
        const status = e.target.status.value;
        const supplier = e.target.supplier.value;
        const paymentStatus = e.target.paymentStatus.value;

        // Validate presence of required fields
        if (!date || !refNo || !status || !supplier || !paymentStatus) {
            toast.error("Please fill in all required fields.");
            console.log('Form values:', { date, refNo, status, supplier, paymentStatus }); // Log form values
            return;
        }

        // Log rows to check their values
        console.log('Rows before submission:', rows);

        // Validate that rows are not empty
        if (rows.some(row => !row.product || !row.unitCost || !row.qty)) {
            toast.error("Please fill in all required fields for each product.");
            return;
        }

        // Construct the purchase data object
        const purchaseData = {
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
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

        // Log purchaseData to verify the structure
        console.log('Purchase Data:', purchaseData);

        try {
            // Send the request directly as JSON
            const response = await fetch('/api/v1/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            });

            const data = await response.json();
            console.log('Response Data:', data); // Log response data

            if (data.success) {
                toast.success('Purchase saved successfully!');
                setRows([{ product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]); // Reset rows
                e.target.reset(); // Reset form fields
                onSubmit(purchaseData);
                onRequestClose();
            } else {
                // Check for specific errors related to product fields
                if (data.error && data.error.includes('products')) {
                    toast.error(`Error: ${data.error}`);
                } else {
                    toast.error(`Error: ${data.error || 'An unexpected error occurred'}`);
                }
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
            console.error('Fetch Error:', error); // Log fetch errors
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>Add Purchase</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" required />
                    </div>
                    <div>
                        <label htmlFor="refNo">Reference No</label>
                        <input type="text" id="refNo" name="refNo" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status" required>
                            <option value="pending">Pending</option>
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input type="text" id="supplier" name="supplier" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select id="paymentStatus" name="paymentStatus" required>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                            type="number" 
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" onClick={handleAddRow}>Add Product</button>
                </div>

                <div className="form-actions">
                    <button type="submit">Save Purchase</button>
                    <button type="button" onClick={onRequestClose}>Cancel</button>
                </div>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;good without prefill*/

/*final storename import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit, purchase }) => {
    const [formData, setFormData] = useState({
        date: '',
        refNo: '',
        status: '',
        supplier: '',
        paymentStatus: '',
    });

    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    useEffect(() => {
        if (purchase && isOpen) {
            // Pre-fill the form data
            setFormData({
                date: purchase.date.split('T')[0],
                refNo: purchase.refNo,
                status: purchase.status,
                supplier: purchase.supplier,
                paymentStatus: purchase.paymentStatus,
            });

            // Pre-fill the rows
            setRows(purchase.products.map(product => ({
                product: product.product,
                unitCost: product.unitCost,
                qty: product.qty,
                discount: product.discount,
                taxes: product.taxes,
                subtotal: product.subtotal,
                note: product.note
            })));
        }
    }, [purchase, isOpen]);

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

        const { date, refNo, status, supplier, paymentStatus } = formData;

        // Validate presence of required fields
        if (!date || !refNo || !status || !supplier || !paymentStatus) {
            toast.error("Please fill in all required fields.");
            return;
        }

        // Validate that rows are not empty
        if (rows.some(row => !row.product || !row.unitCost || !row.qty)) {
            toast.error("Please fill in all required fields for each product.");
            return;
        }

        // Construct the purchase data object
        const purchaseData = {
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
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
            const response = await fetch('/api/v1/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Purchase saved successfully!');
                setRows([{ product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]); // Reset rows
                setFormData({
                    date: '',
                    refNo: '',
                    status: '',
                    supplier: '',
                    paymentStatus: '',
                }); // Reset form fields
                onSubmit(purchaseData);
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
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>{purchase ? 'Edit Purchase' : 'Add Purchase'}</h2>
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
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input
                            type="text"
                            id="supplier"
                            name="supplier"
                            value={formData.supplier}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select
                            id="paymentStatus"
                            name="paymentStatus"
                            value={formData.paymentStatus}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
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
                                            type="number"
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" onClick={handleAddRow}>Add Product</button>
                </div>

                <div className="form-actions">
                    <button type="submit">Save Purchase</button>
                    <button type="button" onClick={onRequestClose}>Cancel</button>
                </div>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;final code without storename */




/*import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";


const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit, purchase }) => {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    refNo: "",
    status: "",
    supplierName: "",
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
    if (purchase && isOpen) {
      setFormData({
        id: purchase._id,
        date: purchase.date.split("T")[0],
        refNo: purchase.refNo,
        status: purchase.status,
        supplierName: purchase.supplierName,
        storeName: purchase.storeName || "", // Pre-fill storeName if available
      });

      setRows(
        purchase.products.map((product) => ({
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
  }, [purchase, isOpen]);

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
    const { date, refNo, status, supplierName, storeName, id } = formData;

    if (!date || !refNo || !status || !supplierName || !storeName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (rows.some((row) => !row.product || !row.unitCost || !row.qty)) {
      toast.error("Please fill in all required fields for each product.");
      return;
    }

    const purchaseData = {
      date,
      refNo,
      status,
      supplierName,
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
      const url = id ? `/api/v1/purchases/${id}` : "/api/v1/purchases";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(purchaseData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(id ? "Purchase updated successfully!" : "Purchase saved successfully!");
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
          supplierName: "",
          storeName: "",
        });
        onSubmit(purchaseData);
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
      className="purchase-modal"
      overlayClassName="purchase-modal-overlay"
      contentLabel="Purchase Form"
    >
      <h2>{purchase ? "Edit Purchase" : "Add Purchase"}</h2>
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
            <label htmlFor="supplierName">Supplier Name</label>
            <input
              type="text"
              id="supplierName"
              name="supplierName"
              value={formData.supplierName}
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

        <div className="purchase-table-section">
          <table className="purchase-table">
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
            Add Row
          </button>
        </div>

        <div className="modal-footer">
          <button type="submit">{purchase ? "Update" : "Add"} Purchase</button>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PurchaseFormModal;store fetch correcly but err in payment sts*/





/*MISSING REQ FIELDS import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit, purchase }) => {
    const [formData, setFormData] = useState({
        date: '',
        refNo: '',
        status: '',
        supplier: '',
        paymentStatus: '',
        storeName: '', // Added storeName field
    });

    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const [stores, setStores] = useState([]); // To hold fetched store names

    // Fetch store names from the API
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/stores');
                const data = await response.json();
                setStores(data); // Save fetched stores in state
                console.log('Fetched stores:', data); // Console log for debugging
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to load stores.');
            }
        };

        fetchStores();
    }, []);

    useEffect(() => {
        if (purchase && isOpen) {
            // Pre-fill the form data
            setFormData({
                date: purchase.date.split('T')[0],
                refNo: purchase.refNo,
                status: purchase.status,
                supplier: purchase.supplier,
                paymentStatus: purchase.paymentStatus,
                storeName: purchase.storeName || '', // Pre-fill storeName if available
            });

            // Pre-fill the rows
            setRows(purchase.products.map(product => ({
                product: product.product,
                unitCost: product.unitCost,
                qty: product.qty,
                discount: product.discount,
                taxes: product.taxes,
                subtotal: product.subtotal,
                note: product.note
            })));
        }
    }, [purchase, isOpen]);

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

        const { date, refNo, status, supplier, paymentStatus, storeName } = formData;

        // Validate presence of required fields
        if (!date || !refNo || !status || !supplier || !paymentStatus || !storeName) {
            toast.error("Please fill in all required fields.");
            return;
        }

        // Validate that rows are not empty
        if (rows.some(row => !row.product || !row.unitCost || !row.qty)) {
            toast.error("Please fill in all required fields for each product.");
            return;
        }

        // Construct the purchase data object
        const purchaseData = {
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
            storeName,
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
            const response = await fetch('/api/v1/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Purchase saved successfully!');
                setRows([{ product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]); // Reset rows
                setFormData({
                    date: '',
                    refNo: '',
                    status: '',
                    supplier: '',
                    paymentStatus: '',
                    storeName: '', // Reset storeName field
                }); // Reset form fields
                onSubmit(purchaseData);
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
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>{purchase ? 'Edit Purchase' : 'Add Purchase'}</h2>
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
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input
                            type="text"
                            id="supplier"
                            name="supplier"
                            value={formData.supplier}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select
                            id="paymentStatus"
                            name="paymentStatus"
                            value={formData.paymentStatus}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
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
                            {stores.map(store => (
                                <option key={store._id} value={store.name}>
                                    {store.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products }
                <div className="purchase-table-section">
                    <table className="purchase-table">
                        <thead>
                            <tr>
                                <th className="product-col">Product</th>
                                <th className="unit-cost-col">Unit Cost</th>
                                <th className="qty-col">Qty</th>
                                <th className="discount-col">Discount (%)</th>
                                <th className="taxes-col">Taxes</th>
                                <th className="subtotal-col">Subtotal</th>
                                <th className="note-col">Note</th>
                                <th className="action-col">Action</th>
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" onClick={handleAddRow}>Add Row</button>
                </div>

                <button type="submit">{purchase ? 'Update Purchase' : 'Add Purchase'}</button>
                <button type="button" onClick={onRequestClose}>Cancel</button>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;*/



import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify'; // Import toast for notifications

const PurchaseFormModal = ({ isOpen, onRequestClose, onSubmit, purchase }) => {
    const [formData, setFormData] = useState({
        date: '',
        refNo: '',
        status: '',
        supplier: '',
        paymentStatus: '',
        storeName: '', // Added storeName field
    });

    const [rows, setRows] = useState([
        { product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }
    ]);

    const [stores, setStores] = useState([]); // To hold fetched store names

    // Fetch store names from the API
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/stores');
                const data = await response.json();
                setStores(data); // Save fetched stores in state
                console.log('Fetched stores:', data); // Console log for debugging
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to load stores.');
            }
        };

        fetchStores();
    }, []);

    useEffect(() => {
        if (purchase && isOpen) {
            // Pre-fill the form data
            setFormData({
                date: purchase.date.split('T')[0],
                refNo: purchase.refNo,
                status: purchase.status,
                supplier: purchase.supplier,
                paymentStatus: purchase.paymentStatus,
                storeName: purchase.storeName || '', // Pre-fill storeName if available
            });

            // Pre-fill the rows
            setRows(purchase.products.map(product => ({
                product: product.product,
                unitCost: product.unitCost,
                qty: product.qty,
                discount: product.discount,
                taxes: product.taxes,
                subtotal: product.subtotal,
                note: product.note
            })));
        }
    }, [purchase, isOpen]);

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

        const { date, refNo, status, supplier, paymentStatus, storeName } = formData;

        // Validate presence of required fields
        if (!date || !refNo || !status || !supplier || !paymentStatus || !storeName) {
            console.log('Validation Error: Required fields are missing.');
            console.log('Current form data:', formData);
            toast.error("Please fill in all required fields.");
            return;
        }

        // Validate that rows are not empty
        const missingRowFields = rows.some(row => !row.product || !row.unitCost || !row.qty);
        if (missingRowFields) {
            console.log('Validation Error: Some product rows are missing required fields.');
            console.log('Current rows data:', rows);
            toast.error("Please fill in all required fields for each product.");
            return;
        }

        // Construct the purchase data object
        const purchaseData = {
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
            storeName,
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
            const response = await fetch('/api/v1/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Purchase saved successfully!');
                setRows([{ product: '', unitCost: '', qty: '', discount: '', taxes: '', subtotal: '', note: '' }]); // Reset rows
                setFormData({
                    date: '',
                    refNo: '',
                    status: '',
                    supplier: '',
                    paymentStatus: '',
                    storeName: '', // Reset storeName field
                }); // Reset form fields
                onSubmit(purchaseData);
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
            className="purchase-modal"
            overlayClassName="purchase-modal-overlay"
            contentLabel="Purchase Form"
        >
            <h2>{purchase ? 'Edit Purchase' : 'Add Purchase'}</h2>
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
                            <option value="order">Order</option>
                            <option value="received">Received</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="supplier">Supplier</label>
                        <input
                            type="text"
                            id="supplier"
                            name="supplier"
                            value={formData.supplier}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="paymentStatus">Payment Status</label>
                        <select
                            id="paymentStatus"
                            name="paymentStatus"
                            value={formData.paymentStatus}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
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
                            {stores.map(store => (
                                <option key={store._id} value={store.name}>
                                    {store.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Table Layout for Products */}
                <div className="purchase-table-section">
                    <table className="purchase-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Unit Cost</th>
                                <th>Quantity</th>
                                <th>Discount (%)</th>
                                <th>Taxes</th>
                                <th>Subtotal</th>
                                <th>Note</th>
                                <th>Actions</th>
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
                                        <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" onClick={handleAddRow}>Add Product</button>
                </div>

                <div className="form-actions">
                    <button type="submit">{purchase ? 'Update Purchase' : 'Add Purchase'}</button>
                    <button type="button" onClick={onRequestClose}>Cancel</button>
                </div>
            </form>
        </Modal>
    );
};

export default PurchaseFormModal;
