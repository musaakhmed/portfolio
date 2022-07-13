import Link from 'next/link'
import { portfolioAndBlogData } from '../lib/data'

export const getStaticProps = async () => {
    const data = await portfolioAndBlogData()
    return {
        props: {
            data,
        },
    }
}

export default function Home({ data }) {
    console.log(data)
    return (
        <div className='text-green-800 text-center text-3xl font-bold'>
            Hello!
            <div>
                {data.portfolios.map((project) => (
                    <div key={project.slug}>
                        <Link
                            href={`/portfolio/${project.slug}`}
                            className='text-2xl font-bold'
                        >
                            <a>{project.title}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                {data.posts.map((post) => (
                    <div key={post.slug}>
                        <Link
                            href={`blog/${post.slug}`}
                            className='text-2xl font-bold'
                        >
                            <a>{post.title}</a>
                        </Link>
                        <div>{post.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
