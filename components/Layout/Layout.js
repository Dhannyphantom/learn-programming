import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
