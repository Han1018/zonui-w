import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 針對 https://han1018.github.io/zonui-website/ 的部署設定
  base: '/zonui-website/', 
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});