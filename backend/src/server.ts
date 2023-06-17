import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./utils/db";
import router from "./routes";
import { errorHandler, notFound } from "./middlewares/errorHandler";

// configs
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors({ credentials: true }));
app.use(morgan("common")); //for logging

// connect to mongodb
connectDB();

//routes
app.use("/api", router());

//serve static files
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  //  frontend/dist ( if use create-react-app then the path is "frontend/build")
  app.use(express.static(path.join(__dirname, "/dist")));

  app.get("*", (_, res: express.Response) =>
    res.sendFile(path.resolve(__dirname, "dist", "index.html"))
  );
} else {
  app.get("/", (_, res: express.Response) => {
    res.send("API is running....");
  });
}

// catch errors all-in-one
app.use(notFound);
app.use(errorHandler);

//start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
