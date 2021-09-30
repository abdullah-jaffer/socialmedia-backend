import { Request, Response } from "express";
import { db } from '../models/index';
import { paginationObject } from '../helpers/index';

const { Post } = db;

const addPost = async (req:Request, res:Response) =>{
    const { title, content, image, tags, userId } = req.body
    try{
       const newPost = await Post.create({
            title: title,
            content: content,
            tags: tags,
            image: image,
            ownerId:userId
          });
        return res.status(200).json({
            status: 200,
            message:"Post added succesfully",
            data: newPost
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
} 

const getPosts = async (req:Request, res:Response) =>{
    const { limit, offset } = req.query 
    let pagination: any = paginationObject(limit, offset);
    try{
        const posts = await Post.findAll(pagination);
        return res.status(200).json({
            status: 200,
            message:"Posts retrieved succesfully",
            data: posts
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

const getPost = async (req:Request, res:Response) =>{
    const id = req?.params?.postId;
    try{
        const posts = await Post.findAll({
            where: {
              id: id
            }
          });
        return res.status(200).json({
            status: 200,
            message:"Post retrieved succesfully",
            data: posts
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

const getPostsByUserId = async (req:Request, res:Response) =>{
    const id = req?.params?.userId;
    const { limit, offset } = req.query 
    let pagination: any = paginationObject(limit, offset);
    let whereClause = {
        where: {
          ownerId: id
        }
      }
    let queryParams = {...pagination, ... whereClause};
    try{
        const posts = await Post.findAll(queryParams);
        return res.status(200).json({
            status: 200,
            message:"Post for this user retrieved succesfully",
            data: posts
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

const updatePost = async (req:Request, res:Response) =>{
    const { id, title, content, image, tags, userId } = req.body
    try{
        const post = await Post.findAll({
            where: {
              id: id
            }
          });
       if(post.length > 0 && post[0].ownerId != userId){
            return res.status(400).json({
                status: 400,
                message:"You do not have permission to modify this post",
            })
       }
       const updatedPost = await Post.update({
            title: title,
            content: content,
            tags: tags,
            image: image,
          },  {
            where: {
              id: id
            }});
        return res.status(200).json({
            status: 200,
            message:"Post updated succesfully",
            data: updatedPost
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

export { addPost, getPosts, getPost, updatePost, getPostsByUserId };