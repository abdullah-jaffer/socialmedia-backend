import express, { Router } from 'express';
import { controllers } from '../controllers/index';

const { addUser, getUsers, getUser, updateUser } = controllers
const router = express.Router();

const putUser = router.post('/users', addUser);
const listUsers = router.get('/users', getUsers);
const getUserById = router.get('/users/:userId', getUser);
const updateUserById = router.patch('/users/', updateUser);
export {putUser, listUsers, getUserById, updateUserById }