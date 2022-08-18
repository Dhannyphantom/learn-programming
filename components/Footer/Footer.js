import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.text}>Contact Us </p>
        <p className={styles.text}>For further enquiries </p>
        <div className={styles.socials}>
          <a
            href="https://wa.me/+23407081713909"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "whatsapp"]}
              color="white"
              size="lg"
              className={styles.icon}
            />
          </a>
          <a
            href="https://github.com/Dhannyphantom"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              color="white"
              size="lg"
              className={styles.icon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-olojo-b61904243"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              color="white"
              size="lg"
              className={styles.icon}
            />
          </a>
        </div>
      </div>

      <p className={`${styles.text} ${styles.textAlign}`}>
        &copy; Copyrights reserved. TechLab Industries 2022
      </p>
    </footer>
  );
}
