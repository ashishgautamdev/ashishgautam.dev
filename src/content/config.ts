import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const timeline = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.number(),
    endYear: z.number().optional(),
    type: z.enum(['work', 'education', 'life']),
    title: z.string(),
    org: z.string().optional(),
    location: z.string().optional(),
    summary: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { posts, timeline };
