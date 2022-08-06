// http://our-domain.com/api/form/enroll
import connectMongo from "../../../config/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  try {
    await connectMongo();
    if (req.method === "POST") {
      const data = req.body;
      const { name, email, phoneNumber } = data;
      const isExist = await User.findOne({ name, email, phoneNumber });

      if (isExist)
        return res.status(422).json({ err: "Credentials already exist" });

      const user = await User.create(data);

      res
        .status(200)
        .json({ msg: "Successfully enrolled, we will get back to you" });
    }
  } catch (err) {
    res.status(422).json({ err });
  }
}
