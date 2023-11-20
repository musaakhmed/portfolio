import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { externalLinkIcon, githubIcon } from '../../components/Svgs'
import Head from 'next/head'
import Image from 'next/image'
import { portfolioProject } from '../../lib/data'

const endpoint =
    'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

const client = new GraphQLClient(endpoint)

export const getStaticPaths = async () => {
    const query = gql`
        query {
            portfolios {
                slug
            }
        }
    `
    const data = await client.request(query)

    return {
        paths: data.portfolios.map((portfolio) => ({
            params: { slug: portfolio.slug },
        })),

        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const project = await portfolioProject(params.slug)
    return {
        props: {
            project: project.portfolios[0],
        },
    }
}

export default function ProjectPage({ project }) {
    console.log(project)

    return (
        <div className='min-h-screen pt-24'>
            <Head>
                <title>{project.title}</title>
            </Head>

            <main className='max-w-xl lg:max-w-5xl mx-auto px-12 space-y-3'>
                <h2 className='text-xl lg:text-3xl text-sun font-Source my-4'>
                    {project.title}
                </h2>
                <Image
                    src={project.coverImage.url}
                    width={project.coverImage.width}
                    height={project.coverImage.height}
                    alt={project.description}
                />
                <div className='prose text-gray-300'>
                    <RichText content={project.content.raw.children} />
                </div>
                <div className='flex flex-wrap'>
                    {project.tags.map((tag) => (
                        <span
                            className='px-3 py-1 space-x-2 bg-gray rounded-lg m-1 text-xs text-gray-900 uppercase'
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='flex space-x-2'>
                    <a href={project.repository}>{githubIcon}</a>
                    <a href={project.link}>{externalLinkIcon}</a>
                </div>
            </main>
        </div>
    )
}
