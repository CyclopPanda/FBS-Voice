import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
    //Api key do noy touch! Only change if trasfering hygraph model
    "https://api-eu-west-2.hygraph.com/v2/clalhyk7r20kx01tc9qipb81z/master"
);

const POSTS = gql`
    {
        posts {
            id
            title
            datePublished
            category
            slug
            content {
            html
            }
            author {
            name
            avatar {
                url
            }
            }
            coverPhoto {
            publishedAt
            createdBy {
                id
            }
            url
            }
        }
    }
`;
const CATEGORIES = gql`
    {
        layoutCategories {
            title
            posts {
                id
            }
        }
    }`;

module.exports = Object.freeze({
    POSTS: POSTS,
    CATEGORIES: CATEGORIES,

    getStaticProps: async ()=>{
        const { posts } = await graphcms.request(POSTS);
        const { layoutCategories } = await graphcms.request(CATEGORIES);
        return {
          props: {
            posts,
            layoutCategories,
          },
          revalidate: 30,
        };
    },
});
