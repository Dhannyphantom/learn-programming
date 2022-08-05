// http://our-domain.com/api/enroll

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { name, email, phoneNumber, gender, hasPC } = data;

    console.log(data);
    res.status(200).json({ data });
  }
}
