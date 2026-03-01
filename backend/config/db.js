import mongoose from "mongoose";


export const connectDB = async () => {
    try {
      const conn =await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected:${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MONGODB!!",error);
        process.exit(1);// process code 1 is failure and 0 is success 
    }
};