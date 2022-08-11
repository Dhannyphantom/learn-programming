import {useState} from "react"
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "../styles/Users.module.css"
import userApi from "../routes/userApi";
import ListUsers from "../components/ListUsers/ListUsers";

export default function UsersPage() {

    const [token, setToken] = useState("");
    const [users, setUsers] = useState([]);

    const onChangeText = (fn, fv) => {
        // alert(fn + ":" + fv)
        setToken(fv)
    }

    const fetchUsers = async () => {
        console.log(token);
        try {
            const res = await userApi.get(`/allUsers/?token=${token}`)
            console.log(res.data);
            setUsers(res.data.users)
        } catch (err) {
            console.log(err)
        }
    }

    return <div  className={styles.container} >
        <div className={styles.input}>
        <Input title="Token" name="token" onChangeText={onChangeText} placeholder="fetch token"  />
        <Button title="Fetch" onPress={fetchUsers} noFormik />

        </div>
        <ListUsers users={users} />
    </div>
}