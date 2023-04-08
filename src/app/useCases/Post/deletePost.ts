import { Request, Response } from "express";
import { Post } from "../../models/Post";
import { getStorage, ref, deleteObject } from "firebase/storage";



export const deletePost = async (req: Request, res: Response) => {
  //check if user exists
  const id = req.params.id;
  try {

    const locatePost = await Post.findById(id);
    const filename = locatePost?.filename;
    const storage = getStorage();
    const imageRef = ref(storage, `images/${filename}`);
    await deleteObject(imageRef);

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(200).json({ msg: 'Post deleated sucefully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Internal server error' });
  }



}