import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../components/Cards";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Free Mahsa</title>
        <meta
          name="description"
          content="A memorial wall for all those we lost or have in prison"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cards />
      </main>
    </div>
  );
};

export default Home;
