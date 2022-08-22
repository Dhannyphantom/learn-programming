import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ListQuestion from "../components/ListQuestion/ListQuestion";
import { nanoid } from "nanoid";
import styles from "../styles/Ask.module.css";
import Question from "../models/Question";
import connect from "../config/dbConnect";
import axios from "axios";

function AskPage({ questionsArr }) {
  const [question, setQuestion] = useState({ text: "", name: "" });
  const [questions, setQuestions] = useState([]);

  console.log(questionsArr);

  const onChangeText = (name, val) => {
    setQuestion({
      ...question,
      [name]: val,
    });
  };

  const onQuestionAsked = async () => {
    console.log(questions);
    if (question.name.length < 2 || question.text.length < 2) return;

    const copier = [...questions];
    const finder = copier.findIndex((obj) => obj.name === question.name);

    if (finder <= -1) {
      copier.push({
        name: question.name,
        id: nanoid(),
        questions: [{ text: question.text, id: nanoid(), reply: "" }],
      });
    } else {
      copier[finder].questions.push({
        id: nanoid(),
        text: question.text,
        reply: "",
      });
    }
    setQuestions(copier);
    setQuestion({ ...question, text: "" });

    try {
      const res = await axios.post("/api/ask/question", { data: question });
      console.log(res.data);
    } catch (err) {
      console.log("UNABLE TO ASK QUESTION", err);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Ask questions and {"we'll"} get back to you
      </h1>
      <form className={styles.form}>
        <Input
          title="Name"
          onChangeText={onChangeText}
          value={question.name}
          name="name"
          placeholder="name"
        />
        <Input
          title="Question"
          name="text"
          value={question.text}
          onChangeText={onChangeText}
          placeholder="question"
          type="textarea"
        />
        <Button title="Ask" onPress={onQuestionAsked} />
      </form>
      <ListQuestion data={questions} />
    </main>
  );
}

export async function getStaticProps() {
  await connect(null, (errMsg) => console.log(errMsg.err));
  const questions = await Question.find().sort({ _id: -1 });
  const questionCleaned = JSON.parse(JSON.stringify(questions));

  return {
    props: {
      questionsArr: questionCleaned,
    },
    revalidate: 5 * 60, // 5min
  };
}

export default AskPage;
