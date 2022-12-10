import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import PageMetadata from "../components/PageMetadata";

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
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>FBS Voice</title>
        <meta name="description" content="FBS Voice news website." />
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
        <PageMetadata /> //Calls on PageMetadata to get misc values
        (decluttering)
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
        ))},
        <h1>Submit an article</h1>
        <form name="fileForm" enctype="multipart/form-data" data-netlify="true">
          <p>
            <label>
              <span>Name:</span>
              <input name="name" type="text" />
            </label>
          </p>
          <p>
            <label>
              <span>Add file:</span>
              <input name="file" type="file" />
            </label>
          </p>
          <button>Submit</button>
        </form>
        <p class="result"></p>
      </main>
    </div>
  );
}

//created by CyclopPanda, cakGit and Thomas
