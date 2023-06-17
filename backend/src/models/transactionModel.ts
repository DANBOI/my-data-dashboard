import { Schema, models, model } from "mongoose";
import { currencySchemaType } from "./kpiModel";
import { transactions } from "../../data";

//Schemas
const TransactionSchema = new Schema(
  {
    amount: currencySchemaType,
    buyer: {
      type: String,
      required: [true, "Buyer is required"],
    },
    productIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

// check kpiModel if is exsits first.
const Transaction =
  models.Transaction || model("Transaction", TransactionSchema);

export const insertTransactionsData = () =>
  Transaction.insertMany(transactions);

export default Transaction;
