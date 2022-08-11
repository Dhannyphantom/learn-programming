// /api/users/all-users
import {connect} from "../../../config/dbConnect";
import User from "../../../models/User";


export default async function handler(req, res) {
    await connect(res)
    if (req.method === 'GET') {
        const token = req.query.token;
        if (!token || token !== "123456!") {
            return res.status(403).json({msg: "Unauthorized request"})
        }
        const users = await User.find()

        res.status(200).json({users})
    }
}