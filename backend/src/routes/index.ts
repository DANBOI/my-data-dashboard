import express from "express";
import kpisRouter from "./kpis";

const router = express.Router();

export default (): express.Router => {
  kpisRouter(router);
  return router;
};
