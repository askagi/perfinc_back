import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModal } from "../models/User.model";

export const UserController = {
  create: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const user = {
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
      };

      const response = await UserModal.create(user);

      return res
        .status(201)
        .json({ data: response, message: "user created successfully" });
    } catch (error) {
      console.error("Error creating user", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  auth: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await UserModal.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    try {
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign({ id: user._id }, secret as string, {
        expiresIn: "8h",
      });

      return res.status(200).json({ token, message: "user authenticated" });
    } catch (error) {
      console.error("Error creating user", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  getById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await UserModal.findById(id, "-password");
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(404).json({ message: "User not found" });
    }
  },
};
