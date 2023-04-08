import { Request, Response } from "express";
import { Post } from "../../models/Post";

export const getPosts = async (req: Request, res: Response) => {


  //check if user exists
  const { userId } = req.params
  const posts = await Post.find().where('user').equals(userId);

  if (!posts) {
    return res.status(404).json({ msg: 'No post found' });
  }
  res.status(200).json(posts);
}