import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../componets/BlogCard";

const graphcms = new GraphQLClient(
  //Api key do noy touch! Only change if trasfering hygraph model
  "https://api-eu-west-2.hygraph.com/v2/clalhyk7r20kx01tc9qipb81z/master"
);
//Needed to pull data from hygraph
const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 21600,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        /* 
          All the meta data for the page,
          Needed to tell devices and users more about the page,
          Edit anything with sebastian sexton out
        */
        //Webpage standards
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FBS Voice</title>
        <meta name="description" content="FBS Voice." />
        //Apple webpage icon and themes
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FBS Voice" />
        <meta name="google-site-verification" content="Vv6Ab5p4eW3hXGhlz5FEzlS7BAR-3yL3s6Hwt0XRTTs" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="FBS Voice"/>
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png"/>
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
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"/>
        <link rel="manifest" href="icons/site.webmanifest"/>
        <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="application-name" content="FBS Voice"/>
        <meta name="msapplication-TileColor" content="#00aba9"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="canonical" href="#" itemprop="url" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}
//created by CyclopPanda, cakGit and Thomas
