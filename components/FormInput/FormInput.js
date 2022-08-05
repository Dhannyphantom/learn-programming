import styles from "./FormInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormInput({
  title,
  placeholder = "",
  boxData = [],
  type = "text",
}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.inputContainer}>
        {type === "text" ? (
          <input
            type={type}
            className={styles.input}
            placeholder={`Enter your ${placeholder}`}
          />
        ) : (
          <div className={styles.checkboxContainer}>
            {boxData.map((obj) => (
              <div className={styles.radioLabel}>
                <input
                  type={type}
                  value={obj.value}
                  name={obj.name}
                  id={obj.id}
                  key={obj.id}
                  className={styles.radio}
                  placeholder={`Enter your ${placeholder}`}
                />
                <FontAwesomeIcon
                  className={styles.radioIcon}
                  icon={obj.icon ?? ["fab", "face-angry"]}
                />
                <label htmlFor={obj.id}> {obj.value} </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
