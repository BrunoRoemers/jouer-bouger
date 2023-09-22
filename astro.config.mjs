import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import decapCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    decapCMS({
      // docs: https://github.com/delucis/astro-netlify-cms
      config: {
        backend: {
          name: "github",
          branch: "main",
          repo: "brunoRoemers/jouer-bouger",
        },
        local_backend: true,
        collections: [
          {
            name: "cards",
            label: "Cards",
            folder: "src/content/cards",
            format: "yml",
            create: true,
            slug: "{{slug}}",
            identifier_field: "slug",
            summary: "{{slug}} - {{title}}",
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Slug", name: "slug", widget: "string" },
              { label: "Video URL", name: "videoUrl", widget: "string" },
            ],
          },
        ],
      },
    }),
  ],
});
