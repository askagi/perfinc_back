import { Router } from "express";
import { UserController } from "../controllers/User.controller";
import { LoginMiddleware } from "../middlewares/Login.middleware";
import { UserMiddleware } from "../middlewares/User.middleware";
const userRouter = Router();

userRouter.post("/users", UserMiddleware.validate, UserController.create);

userRouter.get(
  "/users/:id",
  LoginMiddleware.checkToken,
  UserController.getById
);

userRouter.post("/auth", UserController.auth);

export { userRouter };
