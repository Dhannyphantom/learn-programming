import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "../styles/Users.module.css";
import userApi from "../routes/userApi";
import ListUsers from "../components/ListUsers/ListUsers";
import Modal from "../components/Modal/Modal";
import { connect } from "../config/dbConnect";
import User from "../models/User";

function UsersPage({ users }) {
  const [token, setToken] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [modal, setModal] = useState({ vis: false });

  const onFetchUsers = () => {
    if (token.length < 2) return;
    if (token !== "dann") {
      setModal({
        vis: true,
        type: "error",
        msg: "Unauthorized request!",
      });
    } else {
      setShowUsers(!showUsers);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          title="Token"
          name="token"
          value={token}
          type="password"
          onChangeText={(n, v) => setToken(v)}
          placeholder="fetch token"
        />
        <Button title="Fetch" onPress={onFetchUsers} noFormik />
      </div>
      {showUsers && <ListUsers users={users} />}
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export async function getStaticProps() {
  await connect(null, (errMsg) => console.log(errMsg.err));
  const users = await User.find();
  const usersStr = JSON.parse(JSON.stringify(users));

  return {
    props: {
      users: usersStr,
    },
    revalidate: 5 * 60, // 5min
  };
}

export default UsersPage;
