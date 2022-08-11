import styles from "./Button.module.css";
import { useFormikContext } from "formik";

const dummy = {
  handleSubmit: () => null
}

export default function Button({noFormik = false,title, onPress }) {
  const { handleSubmit } = noFormik ? dummy : useFormikContext();

  const onBtnClick = () => {
    if (!noFormik) {
      console.log("test 2")
      handleSubmit();
    } else {
      console.log("test 1")
      onPress && onPress();
    }
  };

  return (
    <button type="button" onClick={onBtnClick} className={styles.btn}>
      <p className={styles.text}> {title} </p>
    </button>
  );
}
