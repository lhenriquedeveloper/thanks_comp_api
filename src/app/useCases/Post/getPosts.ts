import { Request, Response } from "express";
import { Post } from "../../models/Post";

export const getPosts = async (req: Request, res: Response) => {


  //check if user exists
  const posts = await Post.find()
    .populate('user', '-password -confirmpassword');

  if (!posts) {
    return res.status(404).json({ msg: 'No post found' });
  }
  res.status(200).json(posts);
}