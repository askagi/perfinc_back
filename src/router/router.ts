import { Router } from "express";
import { LoginMiddleware } from "../middlewares/Login.middleware";
import { categoryRouter } from "./Category.router";
import { userRouter } from "./user.router";

const routers = Router();

routers.use("/", userRouter);

routers.use("/", LoginMiddleware.checkToken, categoryRouter);

export { routers };
