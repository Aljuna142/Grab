// src/components/BankDetailsList.js
/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { editBankDetail, deleteBankDetail } from '../store/slices/bankDetailsSlice';

const BankDetailsList = () => {
  const bankDetails = useSelector(state => state.bankDetails);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const updatedDetails = {
      bankName: prompt('Enter new bank name'),
      accountNumber: prompt('Enter new account number'),
      ifscCode: prompt('Enter new IFSC code'),
      emiratesId: prompt('Enter new Emirates ID')
    };

    if (updatedDetails.bankName && updatedDetails.accountNumber && updatedDetails.ifscCode && updatedDetails.emiratesId) {
      dispatch(editBankDetail({ id, updatedDetails }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this bank detail?')) {
      dispatch(deleteBankDetail(id));
    }
  };

  return (
    <div>
      {bankDetails.map(detail => (
        <Card key={detail.id} className="mb-3">
          <Card.Body>
            <Card.Title>{detail.bankName}</Card.Title>
            <Card.Text>
              <strong>Account Number:</strong> {detail.accountNumber}<br />
              <strong>IFSC Code:</strong> {detail.ifscCode}<br />
              <strong>Emirates ID:</strong> {detail.emiratesId}
            </Card.Text>
            <Button variant="warning" onClick={() => handleEdit(detail.id)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(detail.id)} className="ms-2">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BankDetailsList;*/

// src/components/BankDetailsList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { editBankDetail, deleteBankDetail } from '../store/slices/bankDetailsSlice';

const BankDetailsList = ({ showDetails }) => {
  const bankDetails = useSelector(state => state.bankDetails);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const updatedDetails = {
      bankName: prompt('Enter new bank name'),
      accountNumber: prompt('Enter new account number'),
      ifscCode: prompt('Enter new IFSC code'),
      emiratesId: prompt('Enter new Emirates ID')
    };

    if (updatedDetails.bankName && updatedDetails.accountNumber && updatedDetails.ifscCode && updatedDetails.emiratesId) {
      dispatch(editBankDetail({ id, updatedDetails }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this bank detail?')) {
      dispatch(deleteBankDetail(id));
    }
  };

  return (
    <div>
      {showDetails && bankDetails.map(detail => (
        <Card key={detail.id} className="mb-3">
          <Card.Body>
            <Card.Title>{detail.bankName}
                
            </Card.Title>
            <Card.Text>
              <strong>Account Number:</strong> {detail.accountNumber}<br />
              <strong>IFSC Code:</strong> {detail.ifscCode}<br />
              <strong>Emirates ID:</strong> {detail.emiratesId}
            </Card.Text>
            <Button variant="warning" onClick={() => handleEdit(detail.id)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(detail.id)} className="ms-2">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BankDetailsList;



