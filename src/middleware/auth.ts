import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");


export const verifyToken = (req: Request, res: Response, next:NextFunction) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(403).send({status: 403,
    message: "A token is required for authentication"});
  }
  const token = header.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_TOKEN_KEY);
  } catch (err) {
    return res.status(401).send({status: 401,message:"Invalid token", err: err});
  }
  return next();
};