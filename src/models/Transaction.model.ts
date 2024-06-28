import mongoose, { Schema } from "mongoose";
import { ICategory, categorySchema } from "./Category.model";
import { IUser, userSchema } from "./User.model";

export interface ITransaction {
  _id?: string;
  user: IUser;
  categories: Array<ICategory>;
  type: "income" | "expense";
  value: number;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
  description: string;
}

export const transactionSchema = new Schema<ITransaction>({
  user: {
    type: userSchema,
    required: true,
  },
  categories: {
    type: [categorySchema],
    required: true,
  },
  type: {
    type: String,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

export const TransactionModal = mongoose.model(
  "transactions",
  transactionSchema
);
