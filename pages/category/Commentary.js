import styles from "../../styles/Home.module.css";
import BlogCard from "../../components/BlogCard";
import Query from "../../components/Query";
import DefaultHead from "../../components/DefaultHead";

export async function getStaticProps() {
  return await Query.getStaticProps();
}

export default function Commentary({ posts, layoutCategories}) {

  var commentaryPosts = posts.filter(
    (post) => post.category == "Commentary"
  )

  return (
    <div className={styles.container}>

      <DefaultHead/>

      <main className={styles.main}>

        <div className={styles.feedTitle}>
          <h1>News</h1>
        </div>
        <div className={styles.feed}>
          {commentaryPosts.map(post=>
            <BlogCard post={post}/>
          )}
        </div>

      </main>

    </div>
  );
}
