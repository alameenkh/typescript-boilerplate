import express from 'express';

import userController from '../../controllers/user.controller';
import userSchema from '../../constants/schema/user.schema';

const router = express.Router();

import { createValidator } from 'express-joi-validation';

const validator = createValidator();
router.post('/register', validator.body(userSchema.register), userController.register);
router.post('/login', validator.body(userSchema.login), userController.login);
router.get('/me', userController.self);

export default router;
