import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ListQuestion from "../components/ListQuestion/ListQuestion";
import { nanoid } from "nanoid";

function AskPage() {
  const [question, setQuestion] = useState({ text: "", name: "" });
  const [questions, setQuestions] = useState([]);

  const onChangeText = (name, val) => {
    setQuestion({
      ...question,
      [name]: val,
    });
  };

  const onQuestionAsked = () => {
    console.log(question);

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
        name: question.name,
        id: nanoid(),
        questions: [{ text: question.text, id: nanoid(), reply: "" }],
      });
    }
    setQuestions(copier);
  };

  return (
    <main>
      <h1>Ask questions and {"we'll"} get back to you</h1>
      <form>
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
        <ListQuestion data={questions} />
      </form>
    </main>
  );
}

export default AskPage;
