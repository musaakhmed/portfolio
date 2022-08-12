import { blogPosts } from '../../lib/data'
import Link from 'next/link'

export const getStaticProps = async () => {
    const posts = await blogPosts()
    return {
        props: {
            posts,
        },
    }
}

const BlogCard = ({ posts }) => {
    console.log(posts)
    return (
        <div className=' bg-sun'>
            {posts.posts.map((post) => (
                <div key={post.slug}>
                    <Link
                        href={`blog/${post.slug}`}
                        className='text-2xl font-bold'
                    >
                        <a>{post.title}</a>
                    </Link>
                    <div>{new Date(post.date).toDateString()}</div>
                </div>
            ))}
        </div>
    )
}

export default BlogCard
