import { addUser, getUsers, getUser, updateUser }  from './User'
import { addPost, getPosts, getPost, updatePost, getPostsByUserId } from './Post'
import { addFollower, getFollowsPosts } from './Follower'

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
                             getFollowsPosts }