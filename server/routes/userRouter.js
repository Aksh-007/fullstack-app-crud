import express from 'express'
const router = express.Router();
import {createUser, deleteUser, editUser, getAllUsers, homeController}  from '../controllers/user.controller.js';

//this is url part 
router.get('/',homeController );
router.post('/createUser', createUser );
router.get('/getallusers', getAllUsers );
router.put('/editUser/:id', editUser );
router.delete('/deleteUser/:id', deleteUser );

export default router;