import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function AskPage() {
  const [question, setQuestion] = useState({ text: "", name: "" });

  const onChangeText = (name, val) => {
    setQuestion({
      ...question,
      [name]: val,
    });
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
        <Button title="Ask" />
      </form>
    </main>
  );
}

export default AskPage;
