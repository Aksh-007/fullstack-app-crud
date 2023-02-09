import express from 'express'
const router = express.Router();
import {createUser, homeController}  from '../controllers/user.controller.js';

//this is url part 
router.get('/',homeController );
router.post('/createUser', createUser );

export default router;