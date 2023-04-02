import { Router } from "express";
import { createUser } from "./useCases/User/createUser";
import { loginUser } from "./useCases/User/loginUser";

export const router = Router();

//Welcome route
router.get("/", (req, res) => {
  res.send("Server is running");
});

//Create user route
router.post("/auth/register", createUser);

//Login user route
router.post("/auth/login", loginUser);