// /api/users/question
import { connect } from "../../../config/dbConnect";
import Question from "../../model/Question";

export default async function handler(req, res) {
  await connect(res);
  if (req.method === "POST") {
    const data = req.body.data;
    if (!data) return res.status(422).json({ err: "No question asked" });

    console.log(data);
    const userQuestion = await Question.findOne({ name: data.name });

    if (!userQuestion) {
      const newQuestion = new Question({
        name: data.name,
        questions: [{ text: data.text }],
      });

      await newQuestion.save();
    } else {
      userQuestion.questions.push({
        text: data.text,
      });

      await userQuestion.save();
    }

    res.status(200).json({ user });
  }
}
