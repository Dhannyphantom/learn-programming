import styles from "./ListQuestion.module.css";

export default function ListQuestion({ data }) {
  return (
    <section className={styles.container}>
      <h1>Questions</h1>
      <hr />
      <div className={styles.question}>
        {data.map((obj) => {
          return (
            <div className={styles.questionItem} key={obj.id ?? obj._id}>
              <div className={styles.profile}>
                <div className={styles.profilePic}>
                  <h1>{obj.name[0]} </h1>
                </div>
                <h4> {obj.name} </h4>
              </div>
              <div className={styles.content}>
                {obj.questions.map((question) => {
                  return (
                    <div
                      className={styles.questionContent}
                      key={question.id ?? question._id}
                    >
                      <i className={styles.questionText}>
                        {" "}
                        &bull; {question.text}{" "}
                      </i>
                      <p className={styles.questionReply}>{question.reply}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
