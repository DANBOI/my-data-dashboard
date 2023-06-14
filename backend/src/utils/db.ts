import mongoose from "mongoose";
import { insertKpiData } from "../models/kpiModel";

// track the connection
let isConnected = false;

export default async () => {
  mongoose.set("strictQuery", true);
  // mongoose.Promise = Promise;

  if (isConnected) {
    console.warn("MongoDB is already connected");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "dashboard",
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.dropDatabase();
    // await insertKpiData();
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  //handle errors after initial connection
  mongoose.connection.on("error", (error: Error) => console.log(error));
};
