import { Router } from "express";
import { CategoryController } from "../controllers/Category.controller";

export const categoryRouter = Router();

categoryRouter.post("/categories", CategoryController.create);
categoryRouter.get("/categories", CategoryController.getAll);
categoryRouter.get("/categories/:id", CategoryController.getById);
categoryRouter.put("/categories/:id", CategoryController.update);
categoryRouter.delete("/categories/:id", CategoryController.delete);
