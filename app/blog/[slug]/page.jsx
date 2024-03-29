import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Head from 'next/head'
import Image from 'next/image'
import { blogPost } from '../../../lib/data'

export const metadata = {
    title: 'Blog | Musa Akhmedov',
}

const endpoint =
    'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

const client = new GraphQLClient(endpoint)

export const generateStaticParams = async () => {
    const query = gql`
        query {
            posts {
                slug
            }
        }
    `
    const data = await client.request(query)
    const posts = data.posts

    return posts
}

export const getBlogPosts = async ({ params }) => {
    const post = await fetch(params)
    console.log('Posts:', post)
    return post
}

export default async function BlogPost({ params }) {
    const post = await getBlogPosts(params)

    return (
        <div className='min-h-screen pt-24'>
            {/* <Head>
                <title>{post.title} | Blog</title>
            </Head> */}

            <main className='max-w-xl lg:max-w-5xl mx-auto px-12'>
                <h1 className='text-xl md:text-4xl font-Roboto text-sun'>
                    {post.title}
                </h1>
                <p className='text-gray-200 text-sm italic opacity-75'>
                    {new Date(post.date).toDateString()}
                </p>
                <div className='my-4 flex flex-wrap justify-start items-center '>
                    {post.tags.map((tag) => (
                        <span
                            className='text-oxford bg-sun bg-opacity-75 uppercase text-xs lg:text-sm m-1 py-0.5 px-1 lg:py-1 lg:px-2 rounded-lg'
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='m-8'>
                    <Image
                        src={post.coverImage.url}
                        width={post.coverImage.width}
                        height={post.coverImage.height}
                        alt=''
                        className='rounded-xl'
                    />
                </div>
                <article className='prose prose-invert prose-h1:text-gray prose-blockquote:text-gray prose-code:text-gray-300 text-gray w-full max-w-4xl prose-code:bg-midnight prose-li:marker:text-gray-300'>
                    <RichText content={post.content.raw.children} />
                </article>
            </main>
        </div>
    )
}
