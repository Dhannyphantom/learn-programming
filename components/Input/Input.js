import styles from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const normalTypes = ["text", "password", "email", "number"];

export default function Input({
  title,
  placeholder = "",
  boxData = [],
  onBlur,
  values,
  name,
  value,
  onChangeText,
  type = "text",
}) {
  const onChangeInput = (e) => {
    onChangeText && onChangeText(e.target.name, e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.inputContainer}>
          {type === "textarea" ? (
            <textarea
              placeholder="Ask a question"
              onBlur={onBlur}
              onChange={onChangeInput}
              rows="5"
              value={value ?? ""}
              name={name}
              className={styles.input}
            ></textarea>
          ) : normalTypes.includes(type) ? (
            <input
              type={type}
              onBlur={onBlur}
              name={name}
              onChange={onChangeInput}
              value={value ?? ""}
              autoComplete="nocomplete"
              className={styles.input}
              placeholder={`Enter your ${placeholder}`}
            />
          ) : (
            <div className={styles.checkboxContainer}>
              {boxData.map((obj) => {
                const isChecked = values[name] === obj.value;
                return (
                  <div key={obj.id} className={styles.radioLabel}>
                    <input
                      type={type}
                      value={obj.value}
                      onChange={onChangeInput}
                      name={name}
                      checked={isChecked}
                      id={obj.value}
                      className={styles.radio}
                      placeholder={`Enter your ${placeholder}`}
                    />
                    <FontAwesomeIcon
                      className={`${styles.radioIcon} ${
                        isChecked ? styles.radioIconActive : ""
                      } `}
                      icon={obj.icon ?? ["fab", "face-angry"]}
                    />
                    <label htmlFor={obj.value}> {obj.value} </label>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
