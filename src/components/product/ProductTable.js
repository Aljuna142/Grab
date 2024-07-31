import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductTable = ({ specifications }) => {
    return (
        <Table striped bordered hover>
            <tbody>
                {Object.entries(specifications).map(([key, value]) => (
                    <tr key={key}>
                        <td><strong>{key}</strong></td>
                        <td>{value || 'N/A'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

ProductTable.propTypes = {
    specifications: PropTypes.object.isRequired
};

export default ProductTable;
