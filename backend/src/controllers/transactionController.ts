import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Transaction from "../models/transactionModel";

export const getTransactions = asyncHandler(
  async (req: Request, res: Response) => {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    if (transactions?.length) res.json(transactions);
    else {
      res.status(404);
      throw new Error("transactionData not found");
    }
  }
);
