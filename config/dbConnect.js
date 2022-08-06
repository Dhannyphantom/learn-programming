import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MONGODB CONNECTED..."));
};

export default connectMongo;
