import config from '@payload-config'
import { getPayload } from 'payload'
import { initialPosts, initialProjects } from './data'

export async function seedDatabase() {
  const payload = await getPayload({ config })

  console.log('Seeding / updating Payload database...')

  // Upsert projects by slug
  for (const project of initialProjects) {
    const existing = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: project.slug,
        },
      },
      limit: 1,
    })

    const projectData = {
      title: project.title,
      slug: project.slug,
      tagline: project.tagline,
      summary: project.summary,
      challenge: project.challenge,
      architecture: project.architecture,
      solution: project.solution,
      imageUrl: project.imageUrl,
      tags: project.tags.map((t) => ({ tag: t })),
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      publishedDate: project.publishedDate,
    }

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'projects',
        data: projectData,
      })
      console.log(`Created project: ${project.title}`)
    } else {
      await payload.update({
        collection: 'projects',
        id: existing.docs[0].id,
        data: projectData,
      })
      console.log(`Updated project: ${project.title}`)
    }
  }

  // Upsert posts by slug
  for (const post of initialPosts) {
    const existing = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: post.slug,
        },
      },
      limit: 1,
    })

    const postData = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      imageUrl: post.imageUrl,
      tags: post.tags.map((t) => ({ tag: t })),
      readingTime: post.readingTime,
      publishedDate: '2023-11-18',
      status: 'published' as const,
    }

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'posts',
        data: postData,
      })
      console.log(`Created post: ${post.title}`)
    } else {
      await payload.update({
        collection: 'posts',
        id: existing.docs[0].id,
        data: postData,
      })
      console.log(`Updated post: ${post.title}`)
    }
  }

  return { success: true, message: 'Database seeded and updated successfully' }
}
