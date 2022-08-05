import styles from "./Button.module.css";
import { useFormikContext } from "formik";

export default function Button({ form = false, onPress }) {
  const { handleSubmit } = useFormikContext();

  const onBtnClick = () => {
    if (form) {
      handleSubmit();
    } else {
      onPress();
    }
  };

  return (
    <button onClick={onBtnClick} className={styles.btn}>
      <p className={styles.text}>Enroll</p>
    </button>
  );
}
