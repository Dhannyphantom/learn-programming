import styles from "./ListQuestion.module.css";

export default function ListQuestion({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((obj) => {
        return (
          <div key={obj.id ?? obj._id}>
            <div className={styles.profile}>
              <div className={styles.profilePic}>
                <h1>{obj.name[0]} </h1>
              </div>
              <h4> {obj.name} </h4>
            </div>
            <div className={styles.content}>
              {obj.questions.map((question) => {
                return (
                  <div key={question.id ?? question._id}>
                    <h3> {question.text} </h3>
                    <p>{question.reply}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
