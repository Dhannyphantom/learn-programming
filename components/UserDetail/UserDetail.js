import styles from "./UserDetail.module.css";
import { nanoid } from "nanoid";

export default function UserDetail({ item }) {
  return (
    <div key={item.id ?? item._id ?? nanoid()} className={styles.itemContainer}>
      <div className={styles.itemPic}>
        <h1> {item.name[0]} </h1>
      </div>
      <div className={styles.itemDetails}>
        <h4> {item.name} </h4>
        <p>{item.email}</p>
        <p>{item.phoneNumber}</p>
        <p>{item.gender}</p>
        <p>{item.hasPC === "yes" ? "" : "Does not "}Own a PC</p>
      </div>
    </div>
  );
}
