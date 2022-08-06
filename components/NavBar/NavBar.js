import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Image
        src="/logo-transparent.png"
        alt="logo"
        className={styles.image}
        width={120}
        height={120}
      />
      <h5>About</h5>
    </nav>
  );
}
