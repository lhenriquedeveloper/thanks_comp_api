import { Request, Response } from "express";
import { User } from "../../models/User";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export const loginUser = async (req: Request, res: Response) => {
  const { email, password, } = req.body;

  //validations
  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  //check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  //check if password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(422).json({ msg: "Invalid credentials" });
  }
  //autetication process + token
  try {
    const secret = process.env.SECRET;
    const token = jwt.sign({ id: user._id }, secret!);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" });
  }

};