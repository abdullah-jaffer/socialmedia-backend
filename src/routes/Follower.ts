import express, { Router } from 'express';
import { controllers } from '../controllers/index';
import { verifyToken } from '../middleware/auth'
const { addFollower, getFollowsPosts, removeFollow } = controllers
const router = express.Router();

const follow = router.post('/follow', addFollower);
const unfollow = router.delete('/follow', removeFollow);
const feed = router.get('/feed/:follower_id', verifyToken, getFollowsPosts);
export { follow, feed, unfollow  }