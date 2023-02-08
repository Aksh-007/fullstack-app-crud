import express from 'express'
const router = express.Router();
import {homeController, userController}  from '../controllers/user.controller.js';

//this is url part 
router.get('/',homeController );
router.get('/user', userController );

export default router;