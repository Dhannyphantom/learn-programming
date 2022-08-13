// /api/users/all-users
import { connect } from "../../../config/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect(res);
  if (req.method === "GET") {
    const users = await User.find();

    res.status(200).json({ users });
  }
}
