import Image from "next/image";
import styles from "./page.module.css";
import Auth from "./auth/page";

const Home = () => {
  return (
    <main className={styles.main}>
      <Auth />
    </main>
  );
};

export default Home;
