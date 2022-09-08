import { blogPosts } from '../../lib/data'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export const getStaticProps = async () => {
    const posts = await blogPosts()
    return {
        props: {
            posts,
        },
    }
}

const Blog = ({ posts }) => {
    console.log(posts)
    return (
        <div className='min-h-screen pt-24'>
            <Head>
                <title>Blog — Musa Akhmedov</title>
            </Head>
            <h2 className='mx-auto w-[90%] lg:max-w-6xl text-3xl font-Source text-sun pb-4 '>
                Latest posts
            </h2>
            {posts.posts.map((post) => (
                <div
                    key={post.slug}
                    className='bg-sun text-oxford w-[90%] lg:max-w-5xl mx-auto p-3 m-3 rounded-xl
                    flex flex-col md:items-center md:flex-row justify-center md:justify-start'
                >
                    <div className='lg:w-1/3 md:w-1/2 md:px-2'>
                        <Image
                            src={post.coverImage.url}
                            width={post.coverImage.width}
                            height={post.coverImage.height}
                            alt=''
                            className='rounded-xl'
                        />
                    </div>
                    <div className='md:px-2 md:w-1/2 lg:w-2/3'>
                        <Link href={`blog/${post.slug}`}>
                            <a className='text-xl font-semibold '>
                                {post.title}
                            </a>
                        </Link>
                        <p className='text-gray-700 text-sm'>
                            {new Date(post.date).toDateString()}
                        </p>
                        <div className='py-2'>{post.description}</div>
                        <Link href={`blog/${post.slug}`}>
                            <a>
                                <button className=' px-4 py-2 my-4 text-oxford border border-oxford rounded bg-sun bg-opacity-60 hover:bg-opacity-100 transition-all duration-300 text-sm'>
                                    Read More{' '}
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog
