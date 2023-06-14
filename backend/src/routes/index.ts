import express from "express";
import kpiRouter from "./kpiRoute";

const router = express.Router();

export default (): express.Router => {
  kpiRouter(router);
  return router;
};
