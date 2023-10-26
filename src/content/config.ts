import { z, defineCollection } from "astro:content";

const cards = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    videoUrl: z.string(),
    category: z.string().optional(),
    age: z.string().optional(),
    placeAndSurface: z.string().optional(),
    materials: z.string().optional(),
    duration: z.string().optional(),
    goal: z.string().optional(),
    victory: z.string().optional(),
    variationTwoPlayers: z.string().optional(),
    variationManyPlayers: z.string().optional(),
  }),
});

export const collections = {
  cards: cards,
};
