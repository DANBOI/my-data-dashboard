import { Schema, models, model } from "mongoose";
import { currencySchemaType } from "./kpiModel";
// import { products } from "../../data";

//Schemas
const ProductSchema = new Schema(
  {
    price: currencySchemaType,
    expense: currencySchemaType,
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

// check kpiModel if is exsits first.
const Product = models.Product || model("Product", ProductSchema);

// export const insertProductsData = () => Product.insertMany(products);

export default Product;
