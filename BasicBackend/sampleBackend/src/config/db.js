import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected at", result.connection.host);
  } catch (error) {
    console.log("MongoDB Conenction Error");
    console.log(error);
    process.exit(1);
  }
};


export default connectDB;