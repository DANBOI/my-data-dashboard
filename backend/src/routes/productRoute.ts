import express from "express";
import { getProducts } from "../controllers/productController";

export default (router: express.Router) => router.get("/products", getProducts);
