import Head from "next/head";


/* 
    All the meta data for the page,
    Needed to tell devices and users more about the page,
*/
function PageMetadata() {
    return (
        <Head>
            //Webpage standards
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            //Apple webpage icon and themes
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="FBS Voice" />
            <meta name="google-site-verification" content="Vv6Ab5p4eW3hXGhlz5FEzlS7BAR-3yL3s6Hwt0XRTTs" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="FBS Voice"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon-180x180.png"/>

            //Twitter data
            <meta property="og:site_name" content="Site Name" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="#" />
            <meta name="twitter:title" content="FBS Voice" />
            <meta name="twitter:description" content="FBS Voice." />
            <meta name="twitter:image" content="#" />
            <meta itemprop="name" content="FBS Voice" />
            <meta itemprop="description" content="FBS Voice." />
            <meta itemprop="image" content="#" />

            //Other
            <link rel="manifest" href="site.webmanifest"/>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="application-name" content="FBS Voice"/>
            <meta name="msapplication-TileColor" content="#00aba9"/>
            <meta name="theme-color" content="#ffffff"/>
            <link rel="canonical" href="#" itemprop="url" />
        </Head>
    );
  }
  
export default PageMetadata;
        