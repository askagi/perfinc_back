import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const LoginMiddleware = {
  checkToken: (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const secret = process.env.JWT_SECRET;
      jwt.verify(token, secret as string);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  },
};
