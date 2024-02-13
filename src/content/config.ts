import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postCollection,
};
