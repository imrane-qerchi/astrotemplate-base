// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  devToolbar : {enabled:false},
  site: "https://zingy-boba-8391b3.netlify.app/",
  integrations: [preact()]
});