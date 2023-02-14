import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from './../controllers/userController.js'

const router = express.Router()

import { verifyUser } from '../utils/verifyToken.js'

//update tour
router.put('/:id', verifyUser, updateUser)

//delete tour
router.delete('/:id', verifyUser ,deleteUser)

//get single tour
router.get('/:id', verifyUser, getSingleUser)

//get all tours
router.get('/', verifyUser, getAllUser)

export default router