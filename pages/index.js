import styles from "../styles/Home.module.css";
import BlogCard from "../components/BlogCard";
import ParseContent from "../components/ParseContent";
import DefaultHead from "../components/DefaultHead";

const Content = require("../components/Content");

export async function getStaticProps() {
  return Content.getStaticProps();
}

export default function Home({ posts, layoutCategories}) {

  var sortedPosts = ParseContent(posts, layoutCategories);

  return (
    <div className={styles.container}>
      <DefaultHead/>

      <main className={styles.main}>

        <div className={styles.latestTitle}>
          <h1>Latest</h1>
        </div>
        <div className={styles.latest}>
          <BlogCard
            post={sortedPosts.Latest}
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
          {sortedPosts.Remaining.map(post=>
            <BlogCard post={post}/>
          )}
        </div>

      </main>

    </div>
  );

}

//created by CyclopPanda, cakGit (< THATS ME :D) and Thomas
