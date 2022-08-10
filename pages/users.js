import {useState} from "react"
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "../styles/Users.module.css"

export default function UsersPage() {

    const [token, setToken] = useState("");

    const onChangeText = (fn, fv) => {
        // alert(fn + ":" + fv)
        setToken(fv)
    }

    const fetchUsers = () => {
        alert(token)
    }

    return <div className={styles.container} >
        <Input title="Token" name="token" onChangeText={onChangeText} placeholder="fetch token"  />
        <Button title="Fetch" onPress={fetchUsers} noFormik />
    </div>
}