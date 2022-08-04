import styles from "./Card.module.css";
import Image from "next/image";
import FormInput from "../FormInput/FormInput";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <Image
          src="/logo.png"
          className={styles.image}
          width={150}
          height={150}
        />
        <h3>Let's get you set up</h3>
        <p>Enroll now to Learn Programming & User Experience</p>
      </div>
      <div className={styles.rightPane}>
        <h4>Your Info!</h4>
        <FormInput />
      </div>
    </div>
  );
}
