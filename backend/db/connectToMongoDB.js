import mongoose from "mongoose";

const connextToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connect to database");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};
export default connextToMongoDB;
