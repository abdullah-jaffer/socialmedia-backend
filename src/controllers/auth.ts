import { Request, Response } from "express";
const jwt = require('jsonwebtoken');
import { db } from '../models/index';

const { User } = db;

export const login = async (req:Request, res:Response) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email } = req.body;
  
      // Validate user input
      if (!(email)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findAll({
        where: {
          email: email
        }
      });
  
      if (user.length > 0) {
        // Create token
        const token = jwt.sign(
          { email: email },
          process.env.JWT_TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        let payload = {
            user: user,
            token: token
        }
        res.status(200).json(payload);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  }