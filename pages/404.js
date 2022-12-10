// 404.js
import Head from "next/head";
import styles from "../styles/Error.module.css";
import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <Head>
        <title>
            Error | 404
        </title>
    </Head>
        <h2 className={styles.header}>
            Oops, somethings gone wrong...
        </h2>
        <h1>404 - Page Not Found</h1>
    <Link href="/">
        <a>
            Go back home
         </a>
    </Link>
  </>
}

