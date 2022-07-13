import { gql, GraphQLClient } from 'graphql-request'
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
    console.log(data)

    return {
        paths: data.portfolios.map((portfolio) => ({
            params: { slug: portfolio.slug },
        })),

        fallback: false,
    }
}

// export const getStaticPaths = async () => {
//     const slugs = await portfolioProject()
//     console.log(slugs)

//     return {
//         paths: [],
//         fallback: true,
//     }
// }
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
        <div className='text-green-800 text-center text-3xl font-bold'>
            <div>{project.title}</div>
        </div>
    )
}
