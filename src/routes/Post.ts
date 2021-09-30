import express, { Router } from 'express';
import { controllers } from '../controllers/index';

const { addPost, getPosts, getPost, updatePost, getPostsByUserId } = controllers
const router = express.Router();

const putPost = router.post('/user/post', addPost);
const listPosts = router.get('/posts', getPosts);
const getPostById = router.get('/user/post/:postId', getPost);
const getPostsById = router.get('/user/posts/:userId', getPostsByUserId);
const updatePostById = router.patch('/user/post/', updatePost);
export { putPost , listPosts, getPostById, getPostsById, updatePostById  }