import styles from "../../styles/Home.module.css";
import BlogCard from "../../components/BlogCard";
import DefaultHead from "../../components/DefaultHead";

const Content = require("../../components/Content");

export async function getStaticProps() {
  return await Content.getStaticProps();
}

export default function Review({ posts, layoutCategories}) {

  var reviewPosts = posts.filter(
    (post) => post.category == "Review"
  )

  return (
    <div className={styles.container}>

      <DefaultHead/>

      <main className={styles.main}>

        <div className={styles.feedTitle}>
          <h1>Reviews</h1>
        </div>
        <div className={styles.feed}>
          {reviewPosts.map(post=>
            <BlogCard post={post}/>
          )}
        </div>

      </main>

    </div>
  );
}
