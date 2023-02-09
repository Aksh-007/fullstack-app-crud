import express from 'express'
const router = express.Router();
import {createUser, getAllUsers, homeController}  from '../controllers/user.controller.js';

//this is url part 
router.get('/',homeController );
router.post('/createUser', createUser );
router.get('/getallusers', getAllUsers );

export default router;