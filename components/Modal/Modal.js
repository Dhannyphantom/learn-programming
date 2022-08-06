import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ modal, setModal }) {
  if (!modal?.vis) return null;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{modal?.msg}</p>

          <FontAwesomeIcon
            onClick={() => setModal({ vis: false })}
            className={styles.closeIcon}
            icon={["fas", "close"]}
          />
        </div>
        <div className={styles.bar} />
      </div>
    </div>
  );
}
