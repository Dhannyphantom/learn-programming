import { useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { navTab } from "../../constants/dataStore";

export default function NavBar() {
  const [tab, setTab] = useState(navTab);

  const onChangeTab = (id) => {
    setTab((prev) =>
      prev.map((obj) => {
        if (obj.active && obj.id != id) {
          return {
            ...obj,
            active: false,
          };
        } else if (obj.id === id && !obj.active) {
          return {
            ...obj,
            active: true,
          };
        } else {
          return obj;
        }
      })
    );
  };

  const renderTabs = tab.map((obj) => (
    <Link key={obj.id} href={obj.path}>
      <h5
        className={`${styles.linkTitle} ${obj.active ? styles.linkActive : ""}`}
        onClick={() => onChangeTab(obj.id)}
      >
        {obj.name}
      </h5>
    </Link>
  ));

  return (
    <nav className={styles.nav}>
      <Image
        src="/logo-transparent.png"
        alt="logo"
        className={styles.image}
        width={120}
        height={120}
      />
      <div className={styles.linkContainer}>{renderTabs}</div>
    </nav>
  );
}
