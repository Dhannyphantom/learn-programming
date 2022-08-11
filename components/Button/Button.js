import styles from "./Button.module.css";
import { useFormikContext } from "formik";

export default function Button({ noFormik = false, title, onPress }) {
  const formikContext = useFormikContext();

  const onBtnClick = () => {
    if (!noFormik) {
      formikContext.handleSubmit();
    } else {
      onPress && onPress();
    }
  };

  return (
    <button type="button" onClick={onBtnClick} className={styles.btn}>
      <p className={styles.text}> {title} </p>
    </button>
  );
}
