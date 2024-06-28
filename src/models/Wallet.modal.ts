import mongoose, { Schema } from "mongoose";
import { ITransaction, transactionSchema } from "./Transaction.model";

export interface IWallet {
  _id?: string;
  name: string;
  description: string;
  transactions: Array<ITransaction>;
  balance: number;
  owner: {
    _id: string;
    name: string;
  };
  users: [
    {
      _id: string;
      name: string;
      isEdit: boolean;
    }
  ];
  createdAt?: Date;
  updatedAt?: Date;
}

export const walletSchema = new Schema<IWallet>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  transactions: {
    type: [transactionSchema],
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  owner: {
    type: {
      _id: String,
      name: String,
    },
    required: true,
  },
  users: {
    type: [
      {
        _id: String,
        name: String,
        isEdit: Boolean,
      },
    ],
    required: true,
  },
});

export const WalletModal = mongoose.model("wallets", walletSchema);
