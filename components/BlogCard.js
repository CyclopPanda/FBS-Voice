import styles from "./modulestyles/BlogCard.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function BlogPost({ title, author, coverPhoto, category, datePublished, slug }) {
  return (
    <Link className={styles.cardLink} href={`/posts/${slug}`} title={`View Post '${title}'`}>
      <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image src={coverPhoto.url} alt="Cover Photo" fill loading="eager"/>
          </div>
        <div className={styles.text}>
          <h2>{title}</h2>
          <div className={styles.details}>
            <div className={styles.author}>
              <Image src={author.avatar.url} alt={author.name} width="20" height="20" loading="lazy"/>
              <h3>{author.name}</h3>
            </div>
            <div className={styles.date}>
              <h3>{moment(datePublished).format("DD/MM/YY")}</h3>
            </div>
            <div className={styles.category}>
              <h3>{category}</h3>
            </div>
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
