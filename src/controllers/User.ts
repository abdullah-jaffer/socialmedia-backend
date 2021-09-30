import { Request, Response } from "express";
import { db } from '../models/index';

const { User } = db;

const addUser = async (req:Request, res:Response) =>{
    const { first_name, last_name, email, date_of_birth, image } = req.body
    try{
       const newUser = await User.create({
            firstName: first_name,
            lastName: last_name,
            email: email,
            dateOfBirth: date_of_birth,
            image: image
          });
        return res.status(200).json({
            status: 200,
            message:"User added succesfully",
            data: newUser
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
} 

const getUsers = async (req:Request, res:Response) =>{

    try{
        const users = await User.findAll();
        return res.status(200).json({
            status: 200,
            message:"Users retrieved succesfully",
            data: users
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

const getUser = async (req:Request, res:Response) =>{
    const id = req?.params?.userId;
    try{
        const users = await User.findAll({
            where: {
              id: id
            }
          });
        return res.status(200).json({
            status: 200,
            message:"User retrieved succesfully",
            data: users
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

const updateUser = async (req:Request, res:Response) =>{
    const { id, first_name, last_name, email, date_of_birth, image } = req.body
    try{
       const updatedUser = await User.update({
            firstName: first_name,
            lastName: last_name,
            email: email,
            dateOfBirth: date_of_birth,
            image: image
          },  {
            where: {
              id: id
            }});
        return res.status(200).json({
            status: 200,
            message:"User updated succesfully",
            data: updatedUser
        })
    }catch(err){
        return res.status(400).json({
            status: 400,
            message:err,
        })
    }
}

export { addUser, getUsers, getUser, updateUser };