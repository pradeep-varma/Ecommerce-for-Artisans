import express from 'express'
import { getHelpers,getHelperById,deleteHelper,createHelper,updateHelper,createHelperReview } from '../controllers/helperController.js';
import {protect, admin} from '../middleware/authMiddleware.js'
const router= express.Router()

router.route('/').get(getHelpers).post(protect,admin,createHelper)
router.route('/:id').get(getHelperById).delete(protect,admin,deleteHelper).put(protect,admin,updateHelper)
router.route('/:id/reviews').post(protect,createHelperReview)

export default router 