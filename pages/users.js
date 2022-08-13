import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "../styles/Users.module.css";
import userApi from "../routes/userApi";
import ListUsers from "../components/ListUsers/ListUsers";
import Modal from "../components/Modal/Modal";
import { connect } from "../config/dbConnect";
import User from "../models/User";
import Loader from "../components/Loader/Loader";

function UsersPage({ users }) {
  const [token, setToken] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [modal, setModal] = useState({ vis: false });

  const onChangeText = (fn, fv) => {
    // alert(fn + ":" + fv)
    setToken(fv);
  };

  const onFetchUsers = () => {
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
          onChangeText={onChangeText}
          placeholder="fetch token"
        />
        <Button title="Fetch" onPress={onFetchUsers} noFormik />
      </div>
      {showUsers && <ListUsers users={users} />}
      {/* <div className={styles.input}>
        <Loader visible={loading} />
      </div> */}
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
