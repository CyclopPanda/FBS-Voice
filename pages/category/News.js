import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import PageMetadata from "../components/PageMetadata";
import { render } from "react-dom";

const graphcms = new GraphQLClient(
  //Api key do noy touch! Only change if trasfering hygraph model
  "https://api-eu-west-2.hygraph.com/v2/clalhyk7r20kx01tc9qipb81z/master"
);

//Needed to pull data from hygraph
const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      category
      featured
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

const CATEGORY_QUERY = gql`
  {
    categories {
      title
      posts {
        id
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(POSTS_QUERY);
  const { categories } = await graphcms.request(CATEGORY_QUERY);
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 30,
  };
}

export default function Home({ posts, categories}) {
  return (
    <div className={styles.container}>
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
        <PageMetadata /> //Calls on PageMetadata to get misc values (decluttering)
      </Head>

      {formatContent(posts, categories)}

    </div>
  );
}

function formatContent(posts, categories) {

  var remaining = posts.sort((a, b) => (new Date(a.datePublished) < new Date(b.datePublished)) ? 1 : -1);
  var sortedPosts = {};

  var latest = remaining[0];
  remaining = remaining.filter(remain => remain!=latest);
  sortedPosts["Latest"] = latest;

  for (let i=0; i<categories.length; i++) {
    var categoryPosts = [];
    categories[i]["posts"].map(
      postId => {
        var post = remaining.filter(remain=>remain["id"]==postId["id"])[0];
        if (post!=null) {
          categoryPosts.push(post);
          remaining = remaining.filter(remain=>remain["id"]!=postId["id"]);
        }
      });
    sortedPosts[categories[i]["title"]] = categoryPosts;
  }

  return (
    <main className={styles.main}>

      <div className={styles.latestTitle}>
        <h1>Latest</h1>
      </div>
      <div className={styles.latest}>
        <BlogCard
          post={latest}
        />
      </div>

      <div className={styles.featuredTitle}>
        <h1>Featured</h1>
      </div>
      <div className={styles.featured}>
        {sortedPosts.Featured.map(post=>
          <BlogCard post={post}/>
        )}
      </div>

      <div className={styles.feedTitle}>
        <h1>Feed</h1>
      </div>
      <div className={styles.feed}>
        {remaining.map(post=>
          <BlogCard post={post}/>
        )}
      </div>
      <div className={styles.AD}>
        {remaining.map(post=>
          <BlogCard post={post}/>
        )}
      </div>
    </main>

  );

}

//created by CyclopPanda, cakGit and Thomas
