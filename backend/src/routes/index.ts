import express from "express";
import kpiRouter from "./kpiRoute";
import productRouter from "./productRoute";

const router = express.Router();

export default (): express.Router => {
  kpiRouter(router);
  productRouter(router);
  return router;
};
