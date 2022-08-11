import styles from "./ListUsers.module.css"
import {nanoid} from "nanoid"

const DUMMY = [
    {
        id: nanoid(),
        name: "Dan Chris",
        phoneNumber: "07081713909",
        gender: "male",
        email: "youngskillzzz@gmail.com",
        hasPC: "yes"
    },
    {
        id: nanoid(),
        name: "Dan Chris",
        phoneNumber: "07081713909",
        gender: "male",
        email: "youngskillzzz@gmail.com",
        hasPC: "no"
    },
    {
        id: nanoid(),
        name: "Dan Chris",
        phoneNumber: "07081713909",
        gender: "male",
        email: "youngskillzzz@gmail.com",
        hasPC: "no"
    },
    {
        id: nanoid(),
        name: "Dan Chris",
        phoneNumber: "07081713909",
        gender: "male",
        email: "youngskillzzz@gmail.com",
        hasPC: "yes"
    },
    {
        id: nanoid(),
        name: "Dan Chris",
        phoneNumber: "07081713909",
        gender: "male",
        email: "youngskillzzz@gmail.com",
        hasPC: "yes"
    },
]

const Item = ({item}) => {
    return <div className={styles.itemContainer} >
        <div className={styles.itemPic} >
            <h1> {item.name[0]} </h1>
        </div>
        <div className={styles.itemDetails} >
            <h4> {item.name} </h4>
            <p>{item.email}</p>
            <p>{item.phoneNumber}</p>
            <p>{item.gender}</p>
            <p>{item.hasPC === "yes" ? "" : "Does not "}Own a PC</p>
        </div>
    </div>
}

export default function ListUsers({users = []}) {
    if (!users[0]) return null;
    const renderUserData = users.map((obj) => <Item item={obj} key={obj.id} />)
    return <section className={styles.section} >
        <h2 className={styles.title} >Users</h2>
        <div className={styles.container} >
            {renderUserData}
        </div>
    </section>
}