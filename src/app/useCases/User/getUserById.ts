import { Request, Response } from "express";
import { User } from "../../models/User";

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;

  //check if user exists
  const user = await User.findById(id, '-password -confirmpassword');

  if (!user) {
    return res.status(404).json({ msg: 'User not found' });
  }
  res.status(200).json(user);
}