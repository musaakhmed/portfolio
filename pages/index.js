import Link from 'next/link'
import Hero from '../components/Hero'
import SocialLinks from '../components/SocialLinks'
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
        <div className=''>
            <Hero />
            <section className='max-w-xl lg:max-w-5xl mx-auto px-12'>
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
                            <div>{new Date(post.date).toDateString()}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
