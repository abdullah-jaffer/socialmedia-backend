import { Request, Response } from "express";
import { db } from '../models/index';
import { paginationObject } from '../helpers/index';

const { Follower, Post } = db;

const addFollower = async (req:Request, res:Response) =>{
    const { following_id, follower_id } = req.body
    try{
        const follows = await Follower.findAll({
            where: {
              follower_id: follower_id,
              following_id: following_id
            }
          });
      if(follows.length > 0){
        return res.status(200).json({
            status: 200,
            message:"You already follow this user"
        })
      }
       const newFollower = await Follower.create({
            follower_id: follower_id,
            following_id: following_id,
          });
        return res.status(200).json({
            status: 200,
            message:"Succesfully followed this user"
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
} 

const getFollowsPosts = async (req:Request, res:Response) =>{
    const follower = req?.params?.follower_id;
    try{
        const following = await Follower.findAll({
            where: {
              follower_id: follower
            }
          });
          const following_ids = following.map(user=> user.following_id);
          const posts = await Post.findAll({
            where: {
              ownerId:  following_ids
            }
          });
        return res.status(200).json({
            status: 200,
            message:"Followings posts retrieved succesfully",
            data: posts
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}



export { addFollower, getFollowsPosts };