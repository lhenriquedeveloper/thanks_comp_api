import { Router } from "express";
import { createUser } from "./useCases/User/createUser";
import { loginUser } from "./useCases/User/loginUser";
import { getUserById } from './useCases/User/getUserById';
import { CheckToken } from './middlewares/checkToken';

export const router = Router();

//Welcome route - Public route
router.get("/", (req, res) => {
  res.send("Server is running");
});
//Create user route - Public route
router.post("/auth/register", createUser);

//Login user route - Public route
router.post("/auth/login", loginUser);

//return user by id -  Private route
router.get("/user/:id", CheckToken, getUserById);

//return all posts - Public Route
router.get("/posts",);