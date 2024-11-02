import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.dbusername}:${encodeURIComponent(process.env.dbpassword)}@cluster0.qnzhf.mongodb.net/TechTutes?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
