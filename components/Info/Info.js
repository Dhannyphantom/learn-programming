import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <h1>Become a Software Developer</h1>
      <p>
        Are you interested in learning Web development, App Development & User
        Experience?
      </p>
      <p>Well Join Us NOW @{`St. Augustine's`} college, Kabba</p>
      <p className={styles.priceText}>
        <small className={styles.price}>
          {String.fromCharCode("0x20A6")}6,000
        </small>{" "}
        first month promo deal
      </p>
    </div>
  );
}
