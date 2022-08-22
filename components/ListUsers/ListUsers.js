import styles from "./ListUsers.module.css";
import { nanoid } from "nanoid";
import UserDetail from "../UserDetail/UserDetail";

const DUMMY = [
  {
    id: nanoid(),
    name: "Dan Chris",
    phoneNumber: "07081713909",
    gender: "male",
    email: "youngskillzzz@gmail.com",
    hasPC: "yes",
  },
  {
    id: nanoid(),
    name: "Dan Chris",
    phoneNumber: "07081713909",
    gender: "male",
    email: "youngskillzzz@gmail.com",
    hasPC: "no",
  },
  {
    id: nanoid(),
    name: "Dan Chris",
    phoneNumber: "07081713909",
    gender: "male",
    email: "youngskillzzz@gmail.com",
    hasPC: "no",
  },
  {
    id: nanoid(),
    name: "Dan Chris",
    phoneNumber: "07081713909",
    gender: "male",
    email: "youngskillzzz@gmail.com",
    hasPC: "yes",
  },
  {
    id: nanoid(),
    name: "Dan Chris",
    phoneNumber: "07081713909",
    gender: "male",
    email: "youngskillzzz@gmail.com",
    hasPC: "yes",
  },
];

const Item = ({ item }) => {
  return <UserDetail item={item} />;
};

export default function ListUsers({ users = [] }) {
  if (!users[0]) return null;
  const renderUserData = users.map((obj) => (
    <Item item={obj} key={obj._id ?? obj.id} />
  ));
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Users {`(${users.length})`} </h2>
      <div className={styles.container}>{renderUserData}</div>
    </section>
  );
}
