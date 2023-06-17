import express from "express";
import kpiRouter from "./kpiRoute";
import productRouter from "./productRoute";
import transactionRouter from "./transactionRoute";

const router = express.Router();

export default (): express.Router => {
  kpiRouter(router);
  productRouter(router);
  transactionRouter(router);
  return router;
};
