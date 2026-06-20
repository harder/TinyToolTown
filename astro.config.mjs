import { defineConfig } from 'astro/config';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tinytooltown.com',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypeSanitize, {
        ...defaultSchema,
        tagNames: [...(defaultSchema.tagNames || []), 'img'],
        attributes: {
          ...defaultSchema.attributes,
          img: ['src', 'alt', 'title', 'width', 'height'],
          a: ['href', 'title'],
        },
        protocols: {
          href: ['http', 'https'],
          src: ['http', 'https'],
        },
      }],
    ],
  },
});
