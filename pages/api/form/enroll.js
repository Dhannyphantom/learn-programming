// http://our-domain.com/api/form/enroll
import connectMongo from "../../../config/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  try {
    await connectMongo();
  } catch (err) {
    res.status(422).json({ msg: "Unable to connect to server" });
  }
  if (req.method === "POST") {
    const data = req.body;
    if (!data)
      return res.status(422).json({ msg: "Please provide credentials" });

    const { name, email, phoneNumber } = data;
    const isExist = await User.findOne().or([
      { name },
      { email },
      { phoneNumber },
    ]);

    if (isExist)
      return res
        .status(422)
        .json({ msg: "User with these credential(s) already exist" });

    await User.create(data);

    res
      .status(200)
      .json({ msg: "Successfully enrolled, we will get back to you" });
  }
}
