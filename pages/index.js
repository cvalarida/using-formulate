import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Using Formulate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/department-of-veterans-affairs/formulate">
            Formulate
          </a>
        </h1>

        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}> */}
          {/*   <h2>Documentation &rarr;</h2> */}
          {/*   <p>Find in-depth information about Next.js features and API.</p> */}
          {/* </a> */}

          {/* <a href="https://nextjs.org/learn" className={styles.card}> */}
          {/*   <h2>Learn &rarr;</h2> */}
          {/*   <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          {/* </a> */}

          <a href="/examples" className={styles.card}>
            <h2>Examples&nbsp;&rarr;</h2>
            <p>See what’s possible with Formulate.</p>
          </a>

          {/* <a */}
          {/*   href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" */}
          {/*   className={styles.card} */}
          {/* > */}
          {/*   <h2>Deploy &rarr;</h2> */}
          {/*   <p> */}
          {/*     Instantly deploy your Next.js site to a public URL with Vercel. */}
          {/*   </p> */}
          {/* </a> */}
        </div>
      </main>
    </div>
  );
}
