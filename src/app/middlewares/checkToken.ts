import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

// Check if token is valid
export const CheckToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  //Spliting the token from the Bearer
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //Verify token
    const secret = process.env.SECRET;
    jwt.verify(token, secret!);
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}
