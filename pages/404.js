// 404.js
import Head from "next/head";
import styles from "../styles/Error.module.css";
import Link from 'next/link'

function Error() {
    return (
      <div className={styles.container}>
          <Head>
              <title>
                  Error | 404
              </title>
          </Head>
  
          <h2 className={styles.header}>
              Oops, somethings gone wrong...
          </h2>
          <h1 className={styles.code}>
              404
          </h1>
              <p className={styles.return}>
                  File not found : Try going back to the <Link href="/" title="Return home">homepage</Link>
              </p>
      </div>
    )
  }

  export default Error;
  