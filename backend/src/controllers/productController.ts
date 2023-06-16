import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel";

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find();
  if (products?.length) res.json(products);
  else {
    res.status(404);
    throw new Error("productData not found");
  }
});
