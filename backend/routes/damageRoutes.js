// routes/damageRoutes.js
/*import express from 'express';
import { createDamage, getAllDamages, getDamageById, updateDamage, deleteDamage } from '../controllers/damageController.js';

const router = express.Router();

// Routes for CRUD operations
router.post('/', createDamage);
router.get('/', getAllDamages);
router.get('/:id', getDamageById);
router.put('/:id', updateDamage);
router.delete('/:id', deleteDamage);

export default router;*/


import express from 'express';
import { getAllDamages, getDamageById, createDamage,getDamagesByStore, updateDamage, deleteDamage } from '../controllers/damageController.js';

const router = express.Router();

// New dynamic route for fetching store-specific damages
router.get('/:storeName', getDamagesByStore);

router.get('/', getAllDamages);
router.get('/:id', getDamageById);
router.post('/', createDamage);
router.put('/:id', updateDamage);
router.delete('/:id', deleteDamage);

export default router;









