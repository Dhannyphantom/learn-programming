// /api/users/payment
import { connect } from "../../../config/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect(res);
  if (req.method === "GET") {
    const email = req.query.email;
    console.log(email);
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ err: "User not enrolled" });

    res.status(200).json({ user });
  }
}
