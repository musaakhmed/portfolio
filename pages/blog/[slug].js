import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Head from 'next/head'
import Image from 'next/image'
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

export default function BlogPost({ post }) {
    console.log(post)

    return (
        <div>
            <Head>
                <title>{post.title}</title>
            </Head>

            <main className=''>
                <h2>{post.title}</h2>
                <p>{new Date(post.date).toDateString()}</p>
                <Image
                    src={post.coverImage.url}
                    width={post.coverImage.width}
                    height={post.coverImage.height}
                />
                <RichText content={post.content.raw.children} />
                <div>
                    {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </main>
        </div>
    )
}
