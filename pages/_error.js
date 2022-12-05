import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Error.module.css";

function Error({ statusCode }) {
  return (
    <div className={styles.container}>
        <Head>
            <title>
                {statusCode + " | Error"}
            </title>
        </Head>

        <h2 className={styles.header}>
            Oops, somethings gone wrong...
        </h2>
        <h1 className={styles.code}>
            {statusCode}
        </h1>
        {(statusCode == "404" ? 
            <p className={styles.return}>
                File not found : Try going back to the <Link href="/" title="Return home">homepage</Link>
            </p>
        :"")}
    </div>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error;