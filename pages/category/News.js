import styles from "../../styles/Home.module.css";
import BlogCard from "../../components/BlogCard";
import DefaultHead from "../../components/DefaultHead";

const Content = require("../../components/Content");

export async function getStaticProps() {
  return await Content.getStaticProps();
}

export default function News({ posts, layoutCategories}) {

  var newsPosts = posts.filter(
    (post) => post.category == "News"
  )

  return (
    <div className={styles.container}>

      <DefaultHead/>

      <main className={styles.main}>

        <div className={styles.feedTitle}>
          <h1>News</h1>
        </div>
        <div className={styles.feed}>
          {newsPosts.map(post=>
            <BlogCard post={post}/>
          )}
        </div>

      </main>

    </div>
  );
}
