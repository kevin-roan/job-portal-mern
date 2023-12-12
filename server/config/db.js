import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Mongo DB Connected Successfully host:${mongoose.connection.host}`.bgGreen
        .white,
    );
  } catch (error) {
    console.log(`MongoDB Error ${error}`.bgRed);
  }
};

export default connectDB;
