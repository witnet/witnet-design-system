import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: ` `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: [
        'Introduction',
        'Design',
        'Basic',
        'Forms',
        'Navigation',
        'Data',
        'Interface',
      ],
      locales: '',
    },
  },
}
