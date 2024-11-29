/*import express from 'express';
import {
    createPOSOrder,
    getPOSOrders,
    updatePOSOrder,
    deletePOSOrder,
} from '../controllers/posOrderController.js'; // Adjust the path as necessary

const router = express.Router();

// Create a new POS order
router.post('/', createPOSOrder);

// Get all POS orders
router.get('/', getPOSOrders);

// Update a POS order by ID
router.put('/:id', updatePOSOrder);

// Delete a POS order by ID
router.delete('/:id', deletePOSOrder);

export default router;*/

/*pakka import express from 'express';
import {
    createPOSOrder,
    getPOSOrders,
    getPOSOrdersByStoreName,
    updatePOSOrder,
    deletePOSOrder,
} from '../controllers/posOrderController.js';

const router = express.Router();

// Create a new POS order
router.post('/', createPOSOrder);

// Get all POS orders
router.get('/', getPOSOrders);

// Get POS orders by store name (case-insensitive)
router.get('/store/:storeName', getPOSOrdersByStoreName);

// Update a POS order by ID
router.put('/:id', updatePOSOrder);

// Delete a POS order by ID
router.delete('/:id', deletePOSOrder);

export default router;  // This is the default export pakka */







import express from 'express';
import {
    createPOSOrder,
    getPOSOrders,
    getPOSOrdersByStoreName,
    updatePOSOrder,
    deletePOSOrder,
    returnPOSOrder,
    refundPOSOrder
} from '../controllers/posOrderController.js';

const router = express.Router();

// Create a new POS order
router.post('/', createPOSOrder);

// Get all POS orders
router.get('/', getPOSOrders);

// Get POS orders by store name (case-insensitive)
router.get('/storeName/:storeName', getPOSOrdersByStoreName);

// Update a POS order by ID
router.put('/:id', updatePOSOrder);

// Delete a POS order by ID
router.delete('/:id', deletePOSOrder);

// Process return for a POS order
router.post('/return/:id', returnPOSOrder);

// Process refund for a POS order
router.post('/refund/:id', refundPOSOrder);

export default router; // This is the default export
