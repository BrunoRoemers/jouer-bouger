import { z, defineCollection } from "astro:content";

const cards = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    videoUrl: z.string(),
  }),
});

export const collections = {
  cards: cards,
};
