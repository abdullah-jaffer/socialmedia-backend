import { addUser, getUsers, getUser, updateUser }  from './User'
import { addPost, getPosts, getPost, updatePost, getPostsByUserId } from './Post'
import { addFollower, getFollowsPosts, removeFollow  } from './Follower'
import {login} from "./auth";

export const controllers = { addUser, 
                             getUsers, 
                             getUser, 
                             updateUser, 
                             addPost, 
                             getPosts, 
                             getPost, 
                             updatePost, 
                             getPostsByUserId,
                             addFollower,
                             getFollowsPosts,
                             removeFollow,
                             login  }