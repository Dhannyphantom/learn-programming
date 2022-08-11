import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MONGODB CONNECTED..."));
};


export const connect = async (res) => {
  try {
    await connectMongo();
  } catch (err) {
    res.status(422).json({ msg: "Unable to connect to server" });
  }
}
export default connectMongo;