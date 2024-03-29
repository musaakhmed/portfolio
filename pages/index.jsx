import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CardTest from '../components/Card'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import SocialLinks from '../components/SocialLinks'
import { portfolioAndBlogData } from '../lib/data'

export const getStaticProps = async () => {
    const data = await portfolioAndBlogData()
    return {
        props: {
            data,
        },
        revalidate: 1,
    }
}

export default function Home({ data }) {
    console.log(data.posts[0].tags)

    return (
        <div className='bg-oxford'>
            <Head>
                <title>Musa Akhmedov - Portfolio</title>
                {/* <a
                    rel='me'
                    href='https://mastodon.social/@punhan'
                    className='hidden'
                >
                    ''
                </a> */}
            </Head>
            <Hero />
            <main className='max-w-xl lg:max-w-5xl mx-auto px-12'>
                <section className='mx-auto px-4 sm:px-6 lg:px-0 mb-24'>
                    <p
                        id='portfolio'
                        className='text-xl font-Roboto text-sun-600 pb-12 pt-24'
                    >
                        Projects I have worked on recently:
                    </p>
                    {data?.portfolios?.map((item) => (
                        <div key={item.slug}>
                            <Link href={`/portfolio/${item.slug}`} legacyBehavior>
                                <div className='relative overflow-hidden'>
                                    <div className='absolute w-full h-full z-20 bg-sun-700 lg:bg-opacity-80 bg-opacity-50 hover:bg-opacity-30 transition-all duration-300 ease-in flex flex-col justify-evenly lg:justify-center items-center text-center px-4'>
                                        <h3 className='text-oxford bg-sun-400 rounded p-1 font-semibold lg:text-2xl'>
                                            {item.title}
                                        </h3>
                                        <p className='bg-oxford text-sun text-center px-2 mx-auto text-sm lg:text-lg mt-1 lg:mt-4 leading-tight lg:leading-relaxed'>
                                            {item.description}
                                        </p>
                                        <div className='hidden mx-auto mt-1 lg:mt-2 md:flex flex-wrap justify-center items-center'>
                                            {item.tags.map((tag) => (
                                                <span
                                                    className='text-grey bg-oxford uppercase text-xs lg:text-sm m-[1px] lg:m-2 px-2 py-1 rounded-lg'
                                                    key={tag}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Image
                                        src={item.coverImage.url}
                                        height={item.coverImage.height}
                                        objectFit='cover'
                                        width={item.coverImage.width}
                                        className='absolute'
                                        alt=''
                                    />
                                </div>
                                <div className='mx-auto mb-6 flex flex-wrap justify-center items-center'>
                                    {item.tags.map((tag) => (
                                        <span
                                            className='bg-sun-500 text-oxford uppercase text-2xs lg:text-sm m-[2px] lg:m-2 px-2 py-1 rounded-lg md:hidden'
                                            key={tag}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>

                {/* <section>
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
                </section> */}
                <section className='h-screen my-4'>
                    <span className='text-2xl'>Latest Blog Posts:</span>
                    {data.posts.map((post) => (
                        <div
                            key={post.slug}
                            className='mx-auto bg-gray-300 bg-opacity-75 my-4 p-4 rounded-lg'
                        >
                            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start'>
                                <div className='lg:w-1/3'>
                                    <Link href={`blog/${post.slug}`} legacyBehavior>
                                        <Image
                                            className='rounded-lg hover:opacity-100 opacity-75 transition-all duration-200 ease-in'
                                            src={post.coverImage.url}
                                            width={post.coverImage.width}
                                            height={post.coverImage.height}
                                            alt={post.title}
                                        />
                                    </Link>
                                </div>
                                <div className='flex flex-col text-center lg:text-left lg:w-2/3 px-4 space-y-2 items-start'>
                                    <Link
                                        href={`blog/${post.slug}`}
                                        className='text-lg text-center lg:text-left font-semibold leading-snug lg:leading-normal font-Source text-oxford hover:text-sun-400 transition-all duration-200 ease-in'>

                                        {post.title}

                                    </Link>
                                    <p className='text-sm text-gray-800 font-Roboto'>
                                        {new Date(post.date).toDateString()}
                                    </p>
                                    <div className='text-gray-800 font-Roboto mx-auto leading-tight md:leading-normal lg:mx-0'>
                                        {post.description}
                                    </div>
                                    <div className='flex flex-wrap justify-center lg:justify-start items-center space-x-1'>
                                        {post.tags.map((tag) => (
                                            <span
                                                className='text-2xs max-w-24 uppercase bg-gray-300 px-1 py-0.5 m-0.5 rounded-md text-gray-800'
                                                key={tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <ContactForm />

                {/* <CardTest /> */}
            </main>
        </div>
    );
}
