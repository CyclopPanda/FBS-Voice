import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

function dev () { 
    return(
        <div className={styles.container}>
        <Head>
            <title>
                Thanks
            </title>
        </Head>

        <h2 className={styles.header}>
           Special thanks to samuel and seb
        </h2>
            <p className={styles.return}>
                Specifly Samuel 
                Want to go back to <Link href="/" title="Return home">homepage</Link>
            </p>
    </div>
    )
    
}