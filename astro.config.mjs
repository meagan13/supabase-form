import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  output: 'server',
  adapter: cloudflare({mode: 'directory'}),
  vite: {
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
      'process.env.SUPABASE_ANON_key': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
    }
  }
});