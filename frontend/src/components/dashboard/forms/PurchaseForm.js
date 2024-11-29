/*import React, { useState } from 'react';
import { Button, Form, Col, Row, Table, Dropdown } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PurchaseForm = () => {
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([{ product: '', unitCost: 0, quantity: 0, discount: 0, taxes: 0, subtotal: 0 }]);

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    newProducts[index].subtotal = (newProducts[index].unitCost * newProducts[index].quantity) - newProducts[index].discount + newProducts[index].taxes;
    setProducts(newProducts);
  };

  const addProductRow = () => {
    setProducts([...products, { product: '', unitCost: 0, quantity: 0, discount: 0, taxes: 0, subtotal: 0 }]);
  };

  const handleSave = () => {
    // Handle save logic
  };

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="refNo">
            <Form.Label>Ref No</Form.Label>
            <Form.Control type="text" placeholder="Enter reference number" />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select">
              <option>Pending</option>
              <option>Ordered</option>
              <option>Received</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="attachments">
            <Form.Label>Attachments</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

          <Form.Group controlId="supplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control as="select">
              <option>Al Jedayl</option>
              <option>Microless</option>
              <option>Gulf Micro</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Taxes</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <Form.Control 
                      type="text" 
                      value={product.product} 
                      onChange={(e) => handleProductChange(index, 'product', e.target.value)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.unitCost} 
                      onChange={(e) => handleProductChange(index, 'unitCost', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.quantity} 
                      onChange={(e) => handleProductChange(index, 'quantity', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.discount} 
                      onChange={(e) => handleProductChange(index, 'discount', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.taxes} 
                      onChange={(e) => handleProductChange(index, 'taxes', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>{product.subtotal.toFixed(2)}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveRow(index)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={addProductRow}>Add Product</Button>
        </Col>
      </Row>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <ReactQuill value={description} onChange={setDescription} />
      </Form.Group>

      <Button 
        variant="primary" 
        style={{ backgroundColor: '#F45631', borderColor: '#F45631', color: 'white' }} 
        onClick={handleSave}>
        Save
      </Button>
      <Button 
        variant="secondary" 
        style={{ marginLeft: '10px', backgroundColor: '#F45631', borderColor: '#F45631', color: 'white' }} 
        onClick={handleSave}>
        Edit
      </Button>
    </Form>
  );
};

export default PurchaseForm;*/




/*12import React, { useState } from 'react';
import { Button, Form, Col, Row, Table } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// Import the CSS file

const PurchaseForm = () => {
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([{ product: '', unitCost: 0, quantity: 0, discount: 0, taxes: 0, subtotal: 0 }]);

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    newProducts[index].subtotal = (newProducts[index].unitCost * newProducts[index].quantity) - newProducts[index].discount + newProducts[index].taxes;
    setProducts(newProducts);
  };

  const addProductRow = () => {
    setProducts([...products, { product: '', unitCost: 0, quantity: 0, discount: 0, taxes: 0, subtotal: 0 }]);
  };

  const handleSave = () => {
    // Handle save logic
  };

  return (
    <Form className="purchase-form">
      <Row>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label className="form-label">Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="refNo">
            <Form.Label className="form-label">Ref No</Form.Label>
            <Form.Control type="text" placeholder="Enter reference number" />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label className="form-label">Status</Form.Label>
            <Form.Control as="select">
              <option>Pending</option>
              <option>Ordered</option>
              <option>Received</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="attachments">
            <Form.Label className="form-label">Attachments</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

          <Form.Group controlId="supplier">
            <Form.Label className="form-label">Supplier</Form.Label>
            <Form.Control as="select">
              <option>Al Jedayl</option>
              <option>Microless</option>
              <option>Gulf Micro</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Table bordered hover className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Taxes</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <Form.Control 
                      type="text" 
                      value={product.product} 
                      onChange={(e) => handleProductChange(index, 'product', e.target.value)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.unitCost} 
                      onChange={(e) => handleProductChange(index, 'unitCost', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.quantity} 
                      onChange={(e) => handleProductChange(index, 'quantity', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.discount} 
                      onChange={(e) => handleProductChange(index, 'discount', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.taxes} 
                      onChange={(e) => handleProductChange(index, 'taxes', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td>{product.subtotal.toFixed(2)}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveRow(index)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={addProductRow}>Add Product</Button>
        </Col>
      </Row>

      <Form.Group controlId="description">
        <Form.Label className="form-label">Description</Form.Label>
        <ReactQuill value={description} onChange={setDescription} />
      </Form.Group>

      <Button 
        variant="primary" 
        className="btn-save" 
        onClick={handleSave}>
        Save
      </Button>
      <Button 
        variant="secondary" 
        className="btn-edit" 
        onClick={handleSave}>
        Edit
      </Button>
    </Form>
  );
};

export default PurchaseForm;12*/



/*import React, { useState } from 'react';
import { Button, Form, Col, Row, Table } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PurchaseForm = () => {
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([{ product: '', unitCost: 0, quantity: 0, discount: 0, taxes: 0, subtotal: 0 }]);

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    newProducts[index].subtotal = (newProducts[index].unitCost * newProducts[index].quantity) - newProducts[index].discount + newProducts[index].taxes;
    setProducts(newProducts);
  };

  const addProductRow = () => {
    setProducts([...products, { product: '', unitCost: 0, quantity: 0, discount: 0, taxes: 0, subtotal: 0 }]);
  };

  const handleRemoveRow = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    // Handle save logic
  };

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="refNo">
            <Form.Label>Ref No</Form.Label>
            <Form.Control type="text" placeholder="Enter reference number" />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select">
              <option>Pending</option>
              <option>Ordered</option>
              <option>Received</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="attachments">
            <Form.Label>Attachments</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

          <Form.Group controlId="supplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control as="select">
              <option>Al Jedayl</option>
              <option>Microless</option>
              <option>Gulf Micro</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Taxes</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <Form.Control 
                      type="text" 
                      value={product.product} 
                      onChange={(e) => handleProductChange(index, 'product', e.target.value)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.unitCost} 
                      onChange={(e) => handleProductChange(index, 'unitCost', parseFloat(e.target.value) || 0)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.quantity} 
                      onChange={(e) => handleProductChange(index, 'quantity', parseFloat(e.target.value) || 0)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.discount} 
                      onChange={(e) => handleProductChange(index, 'discount', parseFloat(e.target.value) || 0)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <Form.Control 
                      type="number" 
                      value={product.taxes} 
                      onChange={(e) => handleProductChange(index, 'taxes', parseFloat(e.target.value) || 0)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td style={{ textAlign: 'right', paddingRight: '15px' }}>
                    {product.subtotal.toFixed(2)}
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveRow(index)} style={{ width: '100%' }}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={addProductRow} style={{ marginTop: '10px', width: '100%' }}>
            Add Product
          </Button>
        </Col>
      </Row>

      <Form.Group controlId="description" style={{ marginTop: '20px' }}>
        <Form.Label>Description</Form.Label>
        <ReactQuill value={description} onChange={setDescription} />
      </Form.Group>

      <Button 
        variant="primary" 
        style={{ backgroundColor: '#F45631', borderColor: '#F45631', color: 'white', marginTop: '20px' }} 
        onClick={handleSave}>
        Save
      </Button>
      <Button 
        variant="secondary" 
        style={{ marginLeft: '10px', backgroundColor: '#F45631', borderColor: '#F45631', color: 'white', marginTop: '20px' }} 
        onClick={handleSave}>
        Edit
      </Button>
    </Form>
  );
};

export default PurchaseForm;*/
