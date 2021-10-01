import express from 'express';
import { controllers } from '../controllers/index';

const { login } = controllers
const router = express.Router();

const signin = router.post('/login', login);
export { signin  }