import styles from "./styles/BlogCard.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function BlogPost({ post }) {
  return (
    <Link className={styles.cardLink} href={`/posts/${post.slug}`} title={`View Post '${post.title}'`}>
      <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image src={post.coverPhoto.url} alt="Cover Photo" fill loading="eager"/>
          </div>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.details}>
            <div className={styles.author}>
              <Image src={post.author.avatar.url} alt={post.author.name} width="20" height="20" loading="lazy"/>
              <h3>{post.author.name}</h3>
            </div>
            <div className={styles.date}>
              <h3>{moment(post.datePublished).format("DD/MM/YY")}</h3>
            </div>
          </div>
      </div>
    </Link>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogPost;
