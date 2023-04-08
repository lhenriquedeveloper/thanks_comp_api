import { Router } from "express";
import { createUser } from "./useCases/User/createUser";
import { loginUser } from "./useCases/User/loginUser";
import { getUserById } from './useCases/User/getUserById';
import { createPost } from './useCases/Post/createPost';
import { getPosts } from "./useCases/Post/getPosts";
import { deletePost } from "./useCases/Post/deletePost";
import { CheckToken } from './middlewares/checkToken';
import { upload } from "./middlewares/multer";

export const router = Router();

//Welcome route - Public route
router.get("/", (req, res) => {
  res.send("Bem Vindo a API do ThanksComp, tente a rota /posts, para retornar todos os posts até agora!");
});
//Create user route - Public route
router.post("/auth/register", createUser);

//Login user route - Public route
router.post("/auth/login", loginUser);

// return all posts - Public route
router.get("/posts", getPosts);

//return user by id -  Private route
router.get("/user/:id", CheckToken, getUserById);

//create a post - Private Route
router.post("/post", CheckToken, upload, createPost);

//delete a post - Private Route
router.delete("/post/:id", CheckToken, deletePost);

//Get all posts from the user - Private Route
router.get("user/:id/posts", CheckToken, getUserById);