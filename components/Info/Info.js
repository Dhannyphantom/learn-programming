import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <h1>Become a Software Developer</h1>
      <p>
        Are you interested in learning Web development, App Development & User
        Experience?
      </p>
      <p>Join Our Online Zoom Classes or Attend Our Classes In Kabba</p>
      <div className={styles.priceContainer}>
        <p className={styles.priceText}>
          <small className={styles.price}>
            {String.fromCharCode("0x20A6")}6,000
          </small>
          first month promo deal
        </p>
      </div>
    </div>
  );
}
