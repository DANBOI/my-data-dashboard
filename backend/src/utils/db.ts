import mongoose from "mongoose";

// track the connection
let isConnected = false;

export default async () => {
  mongoose.set("strictQuery", true);
  mongoose.Promise = Promise;

  if (isConnected) {
    console.warn("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "dashboard",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  //handle errors after initial connection
  mongoose.connection.on("error", (error: Error) => console.log(error));
};
