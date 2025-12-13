import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from '@svgr/rollup';

export default defineConfig({
  base: '/TestWithTable/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/view/components'),
      '@pages': path.resolve(__dirname, './src/view/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
