import styles from "./FormInput.module.css";

export default function FormInput({ title, placeholder = "" }) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder={`Enter your ${placeholder}`}
        />
      </div>
    </div>
  );
}
