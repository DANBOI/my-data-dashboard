import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Kpi from "../models/kpiModel";

export const getKpis = asyncHandler(async (req: Request, res: Response) => {
  const kpis = await Kpi.find();
  if (kpis?.length) res.json(kpis);
  else {
    res.status(404);
    throw new Error("kpiData not found");
  }
});
