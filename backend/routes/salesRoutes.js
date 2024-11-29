/*import express from 'express';
import { getSalesByStore, createSale, getTotalSalesByStore } from '../controllers/salesController.js';

const router = express.Router();

// Get all sales for a specific store
router.get('/:storeName/sales', getSalesByStore);

// Create a new sale for a specific store
router.post('/:storeName/sales', createSale);

// Get total sales for a specific store
router.get('/:storeName/sales/total', getTotalSalesByStore);

export default router;*/


import express from 'express';
import {
  getSalesByStore,
  createSale,
  getTotalSalesByStore,
  updateSale,
  deleteSale,
} from '../controllers/salesController.js';

const router = express.Router();

// Get all sales for a specific store
router.get('/:storeName/sales', getSalesByStore);

// Create a new sale for a specific store
router.post('/:storeName/sales', createSale);

// Get total sales for a specific store
router.get('/:storeName/sales/total', getTotalSalesByStore);

// Update a sale for a specific store
router.put('/:storeName/sales/:saleId', updateSale);

// Delete a sale for a specific store
router.delete('/:storeName/sales/:saleId', deleteSale);

export default router;

