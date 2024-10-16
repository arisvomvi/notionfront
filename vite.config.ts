import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import { generatedSCSS, generatedCSS } from './src/helpers/colors-generator.js';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
      '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          
          @import "@styles/app.scss";
        `,
      },
    },
  },
})

// ${generatedCSS}
          // ${generatedCSS}
