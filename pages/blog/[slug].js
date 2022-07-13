import { gql, GraphQLClient } from 'graphql-request'
import { blogPost } from '../../lib/data'

const endpoint =
    'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

const client = new GraphQLClient(endpoint)

export const getStaticPaths = async () => {
    const query = gql`
        query {
            posts {
                slug
            }
        }
    `
    const data = await client.request(query)
    console.log(data)

    return {
        paths: data.posts.map((post) => ({
            params: { slug: post.slug },
        })),

        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await blogPost(params.slug)
    return {
        props: {
            post: post.posts[0],
        },
    }
}

export default function ProjectPage({ post }) {
    console.log(post)

    return (
        <div className='text-green-800 text-center text-3xl font-bold'>
            <div>{post.title}</div>
            <img src={post.coverImage.url} alt='' />
        </div>
    )
}
