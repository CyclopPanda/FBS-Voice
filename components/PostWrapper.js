import styles from "styles/Home.module.css";
import BlogCard from "components/BlogCard";
import DefaultHead from "components/DefaultHead";

function wrap(posts) {
    return (<div className={styles.container}>

      <DefaultHead/>

      <main className={styles.main}>

        <div className={styles.feedTitle}>
          <h1>Sport</h1>
        </div>
        <div className={styles.feed}>
          {posts.map(post=>
            <BlogCard post={post}/>
          )}
        </div>

      </main>

    </div>);
}

module.exports = {wrap : wrap};