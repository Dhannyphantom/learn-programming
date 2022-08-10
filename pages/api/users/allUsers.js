// /api/users/allUsers
import User from "../../../models/User";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const users = await User.find()

        res.status(200).json({users})
    }
}