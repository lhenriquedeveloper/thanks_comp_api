import { Request, Response } from "express";
import { Post } from "../../models/Post";

//creating the post
export const createPost = async (req: Request, res: Response) => {

  try {
    const imagePath = req.file?.path;
    const { description, title, user } = req.body;

    //validations
    if (!description || !imagePath || !title || !user) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const post = await Post.create({
      description,
      imagePath,
      title,
      user,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" });
  }
};