import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <FontAwesomeIcon
          icon={["fab", "whatsapp"]}
          color="white"
          size="2xl"
          className={styles.icon}
        />
        <FontAwesomeIcon
          icon={["fab", "github"]}
          color="white"
          size="2xl"
          className={styles.icon}
        />
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          color="white"
          size="2xl"
          className={styles.icon}
        />
      </div>

      <p> &copy; Copyrights reserved. TechLab Industries 2022</p>
    </footer>
  );
}
