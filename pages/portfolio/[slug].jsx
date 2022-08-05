import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'
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
        <div>
            <Head>
                <title>{project.title}</title>
            </Head>

            <main className='max-w-xl lg:max-w-5xl mx-auto px-12'>
                <h2>{project.title}</h2>
                <Image
                    src={project.coverImage.url}
                    width={project.coverImage.width}
                    height={project.coverImage.height}
                    alt=''
                />
                <p>{project.description}</p>
                <RichText content={project.content.raw.children} />

                <a href={project.repository} target='_blank'>
                    Repository
                </a>
                <a href={project.link} target='_blank'>
                    Website
                </a>
                <div>
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </main>
        </div>
    )
}
