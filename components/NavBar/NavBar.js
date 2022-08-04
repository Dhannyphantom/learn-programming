import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Image src="/logo.png" className={styles.image} width={60} height="60" />
      <h3>Learn Programming Enrollment</h3>
      <h5>About</h5>
    </nav>
  );
}
