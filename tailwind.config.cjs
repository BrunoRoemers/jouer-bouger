const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TODO", ...defaultTheme.fontFamily.sans],
        "amatic-sc": ["Amatic SC", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
