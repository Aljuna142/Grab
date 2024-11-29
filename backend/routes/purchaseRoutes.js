/*import express from 'express';
import { createPurchase, getAllPurchases, getPurchaseById, updatePurchase, deletePurchase } from '../controllers/purchaseController.js';

const router = express.Router();


// Middleware for logging
router.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.originalUrl}`);
    next();
});

// Routes for CRUD operations



//POST http://localhost:5000/purchases
router.post('/', createPurchase);


//GET http://localhost:5000/purchases
router.get('/', getAllPurchases);


//GET http://localhost:5000/purchases/{purchaseId}
router.get('/:id', getPurchaseById);



//PUT http://localhost:5000/purchases/{purchaseId}
router.put('/:id', updatePurchase);


// DELETE http://localhost:5000/api/v1/purchases/66d9a7a2cc01f2ce0e2a2d12
router.delete('/:id', deletePurchase);

export default router;*/




import express from 'express';
import { 
    createPurchase, 
    getAllPurchases, 
    getPurchaseById, 
    updatePurchase, 
    deletePurchase,
    getPurchasesByStoreName // Import the new controller method
} from '../controllers/purchaseController.js';

const router = express.Router();

// Middleware for logging
router.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.originalUrl}`);
    next();
});

// NEW: GET http://localhost:5000/purchases/:storeName
router.get('/:storeName', getPurchasesByStoreName); // Store-specific purchases route

// POST http://localhost:5000/purchases
router.post('/', createPurchase);

// GET http://localhost:5000/purchases
router.get('/', getAllPurchases);

// GET http://localhost:5000/purchases/:id
router.get('/:id', getPurchaseById);

// PUT http://localhost:5000/purchases/:id
router.put('/:id', updatePurchase);

// DELETE http://localhost:5000/purchases/:id
router.delete('/:id', deletePurchase);

export default router;
