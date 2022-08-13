import styles from "./Button.module.css";

export default function Button({ title, onPress }) {
  const onBtnClick = () => {
    onPress && onPress();
  };

  return (
    <button type="button" onClick={onBtnClick} className={styles.btn}>
      <p className={styles.text}> {title} </p>
    </button>
  );
}
