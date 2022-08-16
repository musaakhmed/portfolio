import Image from 'next/image'
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
    console.log(data.posts[0].tags)
    return (
        <div className='bg-oxford'>
            <Hero />
            <main className='max-w-xl lg:max-w-5xl mx-auto px-12'>
                <section>
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
                </section>
                <section className='my-2'>
                    {data.posts.map((post) => (
                        <div
                            key={post.slug}
                            className='mx-auto my-2 bg-gray-300 bg-opacity-75 px-2 rounded-lg'
                        >
                            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-center lg:py-4'>
                                <div className='lg:w-1/3 p-4 lg:p-0'>
                                    <Link href={`blog/${post.slug}`}>
                                        <a>
                                            <Image
                                                className='rounded-lg hover:opacity-100 opacity-75 transition-all duration-200 ease-in'
                                                src={post.coverImage.url}
                                                width={post.coverImage.width}
                                                height={post.coverImage.height}
                                                alt={post.title}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <span className='flex flex-col text-center lg:text-left lg:w-2/3 p-4'>
                                    <Link href={`blog/${post.slug}`}>
                                        <a className='text-lg lg:px-4 text-center lg:text-left font-semibold font-Source text-oxford hover:text-sun-400 transition-all duration-200 ease-in'>
                                            {post.title}
                                        </a>
                                    </Link>
                                    <p className='text-sm text-gray-800 font-Roboto lg:px-4'>
                                        {new Date(post.date).toDateString()}
                                    </p>
                                    <div className='text-gray-800 font-semibold mx-auto lg:mx-0 p-4'>
                                        {post.description}
                                    </div>
                                    <div className='flex flex-wrap p-2 justify-center lg:justify-start items-center'>
                                        {post.tags.map((tag) => (
                                            <span
                                                className='text-2xs max-w-24 m-1 p-1 uppercase bg-gray-300 rounded-lg text-gray-800'
                                                key={tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}
