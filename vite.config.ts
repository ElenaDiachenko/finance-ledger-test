import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
  alias: {
   components: '/src/components',
   pages: '/src/pages',
   hooks: '/src/hooks',
   utils: '/src/utils',
   types: '/src/types',
   styles: '/src/styles',
   assets: '/src/assets',
   constants: '/src/constants',
   services: '/src/services',
  },
 },
});
