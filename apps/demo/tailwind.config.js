
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? "jit" : undefined,
  darkMode: "media", // Use media queries for dark mode
  content: [
    join(__dirname, 'app/**/!(*.stories|*.spec).{ts,tsx,html}'),
    // The expression below will also include the libraries that we depend on implicitly (cfr project.json file of NX)
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // color theme is define in styles/global.css
          // the following enables  text-primary-xxx, bg-primary-xxx, or border-primary-xxx
          light: "var(--color-primary-light)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          dark: "var(--color-primary-dark)",
        },
      }
    },
  },
  plugins: [],
};
