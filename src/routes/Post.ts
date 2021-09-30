import express, { Router } from 'express';
import { controllers } from '../controllers/index';

const { addPost, getPosts, getPost, updatePost, getPostsByUserId } = controllers
const router = express.Router();

const putPost = router.post('/post', addPost);
const listPosts = router.get('/posts', getPosts);
const getPostById = router.get('/post/:postId', getPost);
const getPostsById = router.get('/posts/:userId', getPostsByUserId);
const updatePostById = router.patch('/post/', updatePost);
export { putPost , listPosts, getPostById, getPostsById, updatePostById  }