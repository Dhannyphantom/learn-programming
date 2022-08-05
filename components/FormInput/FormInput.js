import styles from "./FormInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormikContext } from "formik";

export default function FormInput({
  title,
  placeholder = "",
  name,
  boxData = [],
  type = "text",
}) {
  const { errors, values, setFieldValue } = useFormikContext();

  const onChangeInput = (e) => {
    setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.inputContainer}>
          {type === "text" ? (
            <input
              type={type}
              name={name}
              onChange={onChangeInput}
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
      {errors[name] && <p className={styles.error}> {errors[name]} </p>}
    </div>
  );
}
