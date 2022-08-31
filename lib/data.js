import { gql, GraphQLClient } from 'graphql-request'

export const portfolioAndBlogData = () => {
    const endpoint =
        'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
        {
            portfolios(first: 3) {
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
            posts(first: 3, orderBy: date_DESC) {
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

export const portfolioProject = async (slug) => {
    const endpoint =
        'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
        query getPortfolio($slug: String!) {
            portfolios(where: { slug: $slug }) {
                title
                tags
                slug
                description
                coverImage {
                    url
                    width
                    height
                }
                content {
                    raw
                }
                link
                repository
            }
        }
    `

    const variables = {
        slug,
    }

    return graphQLClient.request(query, variables)
}

export const blogPosts = () => {
    const endpoint =
        'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
        {
            posts(orderBy: date_DESC) {
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

export const blogPost = async (slug) => {
    const endpoint =
        'https://api-eu-central-1.graphcms.com/v2/cl5hfnf1c1cpf01uj2uuj1e9b/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
        query blogPost($slug: String!) {
            posts(where: { slug: $slug }) {
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
                content {
                    raw
                }
            }
        }
    `

    const variables = {
        slug,
    }

    return graphQLClient.request(query, variables)
}
