import styles from "../../styles/Home.module.css";
import BlogCard from "../../components/BlogCard";
import DefaultHead from "../../components/DefaultHead";

const Content = require("../../components/Content");

export async function getStaticProps() {
  return await Content.getStaticProps();
}

export default function Sport({ posts, layoutCategories}) {

  var sportPosts = posts.filter(
    (post) => post.category == "Sport"
  )

  return (
    <div className={styles.container}>

      <DefaultHead/>

      <main className={styles.main}>

        <div className={styles.feedTitle}>
          <h1>Sport</h1>
        </div>
        <div className={styles.feed}>
          {sportPosts.map(post=>
            <BlogCard post={post}/>
          )}
        </div>

      </main>

    </div>
  );
}
