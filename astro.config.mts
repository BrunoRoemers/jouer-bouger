import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import decapDevServer from "./decap-dev-server.mts";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), decapDevServer()],
});