import { gql, GraphQLClient } from 'graphql-request'

export const blogPosts = () => {
    const endpoint =
        'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
        {
            posts {
                title
                slug
                description
                date
                tags
                coverImage {
                    url
                    width
                    height
                }
                author {
                    name
                    image {
                        url
                        width
                        height
                    }
                }
            }
        }
    `
    return graphQLClient.request(query)
}

export const portfolioProjects = () => {
    const endpoint =
        'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
        {
            portfolios {
                title
                slug
                description
                tags
                coverImage {
                    url
                    width
                    height
                }
            }
        }
    `
    return graphQLClient.request(query)
}
