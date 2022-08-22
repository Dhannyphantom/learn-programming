import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// modal = {vis: bool, type: "success/error", msg: string}

export default function Modal({ modal, setModal }) {
  if (!modal?.vis) return null;

  const barColor = modal?.type === "error" ? styles.barError : "";
  const barTextColor = modal?.type === "error" ? styles.barErrorText : "";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.details}>
          <p className={`${styles.msg} ${barTextColor}`}>{modal?.msg}</p>

          <FontAwesomeIcon
            onClick={() => setModal({ vis: false })}
            className={styles.closeIcon}
            icon={["fas", "close"]}
          />
        </div>
        <div className={`${styles.bar} ${barColor}`} />
      </div>
    </div>
  );
}
