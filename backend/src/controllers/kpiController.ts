import express from "express";
import Kpi from "../models/kpiModel";

export const getKpis = async (req: express.Request, res: express.Response) => {
  try {
    const kpis = await Kpi.find();
    return res.status(200).json(kpis).end();
  } catch (error: any) {
    console.log(error.message);
    return res.sendStatus(404);
  }
};
