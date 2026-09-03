import config from '@payload-config'
import { getPayload } from 'payload'
import { initialPosts, initialProjects, type Post, type Project } from './data'

export async function getPayloadClient() {
  try {
    return await getPayload({ config })
  } catch (err) {
    console.error('Failed to get Payload client:', err)
    return null
  }
}

export async function getProjects(): Promise<Project[]> {
  const payload = await getPayloadClient()
  if (!payload) return initialProjects

  try {
    const res = await payload.find({
      collection: 'projects',
      limit: 100,
      sort: '-publishedDate',
    })
    if (res.docs && res.docs.length > 0) {
      return res.docs.map((doc: any) => ({
        slug: doc.slug,
        title: doc.title,
        tagline: doc.tagline,
        summary: doc.summary,
        challenge: doc.challenge || '',
        architecture: doc.architecture || '',
        solution: doc.solution || '',
        imageUrl: doc.imageUrl || (doc.coverImage?.url ?? ''),
        tags: doc.tags?.map((t: any) => t.tag) || [],
        demoUrl: doc.demoUrl || '',
        githubUrl: doc.githubUrl || '',
        featured: doc.featured ?? true,
        publishedDate: doc.publishedDate || '',
      }))
    }
  } catch {
    // Graceful fallback during static build / initial setup
  }
  return initialProjects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((p) => p.slug === slug) || null
}

export async function getPosts(): Promise<Post[]> {
  const payload = await getPayloadClient()
  if (!payload) return initialPosts

  try {
    const res = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      limit: 100,
      sort: '-publishedDate',
    })
    if (res.docs && res.docs.length > 0) {
      return res.docs.map((doc: any) => ({
        slug: doc.slug,
        title: doc.title,
        date: doc.publishedDate
          ? new Date(doc.publishedDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : '',
        readingTime: doc.readingTime || '4 min read',
        excerpt: doc.excerpt,
        content: doc.content,
        imageUrl: doc.imageUrl || (doc.coverImage?.url ?? ''),
        tags: doc.tags?.map((t: any) => t.tag) || [],
      }))
    }
  } catch {
    // Graceful fallback during static build / initial setup
  }
  return initialPosts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts()
  return posts.find((p) => p.slug === slug) || null
}
