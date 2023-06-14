import express from "express";
import dotenv from "dotenv";
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
// app.get("*", (_, res) => {
//   res.send("API is running....");
// });

// catch errors all-in-one
app.use(notFound);
app.use(errorHandler);

//start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
