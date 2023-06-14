import express from "express";
import { getKpis } from "../controllers/kpiController";

export default (router: express.Router) => router.get("/kpis", getKpis);
