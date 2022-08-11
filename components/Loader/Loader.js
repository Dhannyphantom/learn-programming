import Lottie from "react-lottie-player";
import loader from "../../public/lottie/two_line_circle_spinner.json";
import styles from "./Loader.module.css";

export default function Loader({ visible }) {
  if (!visible) return null;
  return (
    <div className={styles.loader}>
      <Lottie
        loop
        animationData={loader}
        play
        style={{ width: 50, height: 50 }}
      />
    </div>
  );
}
