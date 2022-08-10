import Input from "../components/Input/Input";
import styles from "../styles/Users.module.css"

export default function UsersPage() {
    return <div className={styles.container} >
        <Input title="Token" placeholder="fetch token"  />
    </div>
}