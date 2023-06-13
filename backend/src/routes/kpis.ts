import express from "express";

export default (router: express.Router) => {
  router.get("/kpis", (req: express.Request, res: express.Response) => {
    res.send("kpis route!");
  });
};
