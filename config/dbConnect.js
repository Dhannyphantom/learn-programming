import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MONGODB CONNECTED..."));
};

export const connect = async (res, cb) => {
  try {
    await connectMongo();
  } catch (err) {
    res && res.status(422).json({ msg: "Unable to connect to MongoDB server" });
    cb && cb({ err: "Unable to connect to MongoDB Server" });
  }
};
export default connectMongo;
