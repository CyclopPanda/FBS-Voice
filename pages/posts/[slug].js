import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";
import Content from "../../components/Content";
import moment from "moment";

/*const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      category
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;*/

export async function getStaticPaths() {
  return {
    paths: (await Content.getPosts()).map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const post = (await Content.getPosts()).filter((post) => (post.slug == slug))[0];

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>

      <div
        className={styles.titleContainer}
        style={{backgroundImage: "url(" + post.coverPhoto.url + ")"}}
        >
        
        <div className={styles.title}>
          <h1>
            {post.title}
          </h1>

          <h5>
            {post.category}
          </h5>

          <div className={styles.authorDetails}>
            <img src={post.author.avatar.url} alt={post.author.name} />
            <div className={styles.authorText}>
              <h6>By {post.author.name} </h6>
              <h6 className={styles.date}>
                {moment(post.datePublished).format("MMMM d, YYYY")}
              </h6>
            </div>
          </div>
        </div>
        

      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      >
      </div>
      
    </main>
  );
}
