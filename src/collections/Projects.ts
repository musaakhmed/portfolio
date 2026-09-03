import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'featured', 'publishedDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Short Tagline (e.g. Official website for Horzees NFT project)',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'Project Summary',
    },
    {
      name: 'challenge',
      type: 'textarea',
      label: 'The Challenge & Goals',
    },
    {
      name: 'architecture',
      type: 'textarea',
      label: 'Technical Architecture & Stack Choices',
    },
    {
      name: 'solution',
      type: 'textarea',
      label: 'Key Solutions & Features Delivered',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'External Cover Image URL (or use media upload)',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'demoUrl',
      type: 'text',
      label: 'Live Demo URL',
    },
    {
      name: 'githubUrl',
      type: 'text',
      label: 'GitHub Repository URL',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
  ],
}
