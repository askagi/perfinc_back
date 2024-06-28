import mongoose, { Schema } from "mongoose";

export interface ICategory {
  _id?: string;
  name: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export const CategoryModel = mongoose.model("categories", categorySchema);
