import express from "express";
import { getTransactions } from "../controllers/transactionController";

export default (router: express.Router) =>
  router.get("/transactions", getTransactions);
