import Head from "next/head";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Programming</title>
        <meta
          name="description"
          content="Learn Programming & Become a Software Developer"
        />
        <link rel="icon" href="/logo-transparent.png" />
      </Head>

      <NavBar />
      <Info />
      <div className={styles.wrapper}>
        <Card />
      </div>
      <Footer />
    </div>
  );
}
