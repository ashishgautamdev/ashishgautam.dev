import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ashishgautam.dev',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
