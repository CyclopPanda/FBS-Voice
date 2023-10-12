const ContentWrapper = require("@components/PostWrapper");

const Content = require("components/Content");

export async function getStaticProps() {
  return await Content.getStaticProps();
}

export default function Sport({ posts, layoutCategories}) {

  var sportPosts = posts.filter(
    (post) => post.category == "Sport"
  )

  return ContentWrapper.wrap(sportPosts);
}
