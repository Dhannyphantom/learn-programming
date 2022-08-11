import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "../styles/Users.module.css";
import userApi from "../routes/userApi";
import ListUsers from "../components/ListUsers/ListUsers";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";

export default function UsersPage() {
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ vis: false });

  const onChangeText = (fn, fv) => {
    // alert(fn + ":" + fv)
    setToken(fv);
  };

  const fetchUsers = async () => {
    if (token.length < 2) return;
    setLoading(true);
    try {
      const res = await userApi.get(`/all-users/?token=${token}`);
      console.log(res.data);
      setUsers(res.data.users);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setModal({
        vis: true,
        type: "error",
        msg: "Unauthorized request",
      });
      setLoading(false);
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
        <Button title="Fetch" onPress={fetchUsers} noFormik />
      </div>
      <ListUsers users={users} />
      <div className={styles.input}>
        <Loader visible={loading} />
      </div>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
