import { Request, Response } from "express";
import { User } from "../../models/User";
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, phone, password, confirmpassword, city } = req.body;

  //validations
  if (!name || !email || !phone || !password || !city) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  if (password !== confirmpassword) {
    return res.status(400).json({ message: "Password does not match" });
  }

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  //creating password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);
  //creating user
  const user = new User({
    name,
    email,
    phone,
    password: passwordHash,
    confirmpassword: passwordHash,
    city
  })

  try {
    await user.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" });
  }
};