import { Router } from "express";
import { userRouter } from "./user.router";

const routers = Router();

routers.use("/", userRouter);

export { routers };
