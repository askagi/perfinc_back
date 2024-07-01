import { NextFunction, Request, Response } from "express";
import { UserModal } from "../models/User.model";

export const UserMiddleware = {
  validate: async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await UserModal.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    return next();
  },
};
