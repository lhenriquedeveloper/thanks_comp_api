import { Request, Response } from "express";
import { Post } from "../../models/Post";
import { InitFirebaseApp } from "../../services/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


//creating the post
export const createPost = async (req: Request, res: Response) => {
  try {
    const file: any = req.file;
    const timestamp = Date.now().toString();
    const name = file.originalname.split(".")[0];
    const extension = file.originalname.split(".")[1];
    const filename = `${name}-${timestamp}.${extension}`;

    const storage = getStorage(InitFirebaseApp);
    const imageRef = ref(storage, `images/${filename}`);
    await uploadBytes(imageRef, file.buffer);
    const imagePath = await getDownloadURL(imageRef);


    const { description, title, user } = req.body;
    //validations
    if (!description || !file || !title || !user) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const post = await Post.create({
      description,
      imagePath,
      title,
      user,
      filename,
    })
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" });
  }
};