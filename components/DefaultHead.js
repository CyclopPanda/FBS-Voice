import Head from "next/head";
import PageMetadata from "./PageMetadata";


export default function DefaultHead() {
    return (
        <Head>
            <title>FBS Voice</title>
            <meta name="description" content="FBS Student News Website." />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="icons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="icons/favicon-16x16.png"
            />
            <link rel="manifest" href="site.webmanifest" />
            <link rel="icon" href="/favicon.ico" />
            <PageMetadata/>
        </Head>
      );
}
