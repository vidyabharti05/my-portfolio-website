import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//https//
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',  // must match your repo name
});
