import express from 'express';
import { getAllTestimonials, createTestimonial, deleteTestimonial, } from '../controllers/testimonialController.js';
const router = express.Router();
router.get('/', getAllTestimonials);
router.post('/', createTestimonial);
router.delete('/:id', deleteTestimonial);
export default router;
//# sourceMappingURL=testimonialRoutes.js.map