import Image from "next/image";
import styles from "./NavBar.module.css";
import Link from "next/link"

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
      <div className={styles.linkContainer} >
      <Link href="/" >
      <h5>Home</h5>
      </Link>
      <Link href="/users" >
      <h5>Users</h5>
      </Link>
      <h5>About</h5>

      </div>
    </nav>
  );
}
