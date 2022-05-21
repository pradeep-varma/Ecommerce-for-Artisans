import express from 'express'
import { getFoods,getFoodById,deleteFood,createFood,updateFood,createFoodReview } from '../controllers/foodController.js';
import {protect, admin} from '../middleware/authMiddleware.js'
const router= express.Router()

router.route('/').get(getFoods).post(protect,admin,createFood)
router.route('/:id').get(getFoodById).delete(protect,admin,deleteFood).put(protect,admin,updateFood)
router.route('/:id/reviews').post(protect,createFoodReview)

export default router 