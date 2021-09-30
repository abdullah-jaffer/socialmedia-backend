import express, { Router } from 'express';
import { controllers } from '../controllers/index';

const { addFollower, getFollowsPosts } = controllers
const router = express.Router();

const follow = router.post('/follow', addFollower);
const feed = router.get('/feed/:follower_id', getFollowsPosts);
export { follow, feed  }