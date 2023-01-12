import styles from "../../styles/Home.module.css";
import BlogCard from "../../components/BlogCard";
import Query from "../../components/Query";
import DefaultHead from "../../components/DefaultHead";

export async function getStaticProps() {
  return await Query.getStaticProps();
}

export default function Home({ posts, layoutCategories}) {

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
