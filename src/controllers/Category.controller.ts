import { Request, Response } from "express";
import { CategoryModel, ICategory } from "../models/Category.model";

export const CategoryController = {
  create: async (req: Request, res: Response) => {
    const { name } = req.body as ICategory;

    try {
      const response = await CategoryModel.create({ name, userId: req.userId });
      return res
        .status(201)
        .json({ data: response, message: "Category created successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const categories = await CategoryModel.findOne({ userId: req.userId });
      if (!categories)
        return res.status(404).json({ message: "Category not found" });
      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const category = await CategoryModel.findOne({
        _id: id,
        userId: req.userId,
      });
      if (!category)
        return res.status(404).json({ message: "Category not found" });
      return res.status(200).json({ category });
    } catch (error) {
      return res.status(404).json({ message: "Category not found" });
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const category = await CategoryModel.findOneAndUpdate(
        { _id: id, userId: req.userId },
        req.body
      );
      if (!category)
        return res.status(404).json({ message: "Category not found" });
      return res.status(200).json({ category });
    } catch (error) {
      return res.status(404).json({ message: "Category not found" });
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const category = await CategoryModel.findOneAndDelete(
        { _id: id, userId: req.userId },
        req.body
      );
      if (!category)
        return res.status(404).json({ message: "Category not found" });
      return res.status(200).json({ category });
    } catch (error) {
      return res.status(404).json({ message: "Category not found" });
    }
  },
};
