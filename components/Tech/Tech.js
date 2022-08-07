import React from "react";
import Image from "next/image";
import styles from "./Tech.module.css";
import { TECH_DATA } from "../../constants/dataStore";

const Item = ({ item }) => {
  return (
    <div style={{ backgroundColor: item.bg }} className={styles.techItem}>
      <Image src={item.image} width={70} height={70} />
      {item.name && (
        <p style={{ color: item.text }} className={styles.techName}>
          {item.name}
        </p>
      )}
    </div>
  );
};

export default function Tech() {
  const renderTechs = TECH_DATA.map((obj) => {
    return <Item key={obj.id} item={obj} />;
  });
  return (
    <section className={styles.container}>
      <h3>What You'll Learn</h3>
      <div className={styles.tech}>{renderTechs}</div>
    </section>
  );
}
