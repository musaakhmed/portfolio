import { blogPosts } from '../../lib/data'
import Link from 'next/link'
import Image from 'next/image'

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
        <div className='h-screen '>
            {posts.posts.map((post) => (
                <div
                    key={post.slug}
                    className='bg-sun text-oxford max-w-7xl mx-auto p-3'
                >
                    <div className=''>
                        <Image
                            src={post.coverImage.url}
                            width={post.coverImage.width}
                            height={post.coverImage.height}
                            alt=''
                            className='rounded-xl'
                        />
                    </div>
                    <Link href={`blog/${post.slug}`}>
                        <a className='text-xl font-semibold '>{post.title}</a>
                    </Link>
                    <p className='text-gray-700 text-sm'>
                        {new Date(post.date).toDateString()}
                    </p>
                    <div className='py-2'>{post.description}</div>
                </div>
            ))}
        </div>
    )
}

export default Blog
