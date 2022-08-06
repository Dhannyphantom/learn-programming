// http://our-domain.com/api/form/enroll
import connectMongo from "../../../config/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  console.log(req.method);
  if (req.method === "POST") {
    try {
      console.log("Connecting to Mongo");
      await connectMongo();
      console.log("Mongo connected");

      const user = await User.create(req.body);

      res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      res.status(422).json({ err });
    }
  }
}
