import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'VueSplitLayout',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          dir: 'dist',
          entryFileNames: 'vue-split-layout.js',
          format: 'umd',
          name: 'VueSplitLayout',
          globals: {
            vue: 'Vue'
          },
          sourcemap: true
        },
        {
          dir: 'dist',
          entryFileNames: 'vue-split-layout.min.js',
          format: 'umd',
          name: 'VueSplitLayout',
          globals: {
            vue: 'Vue'
          },
          plugins: [terser()], // Minify the output
          sourcemap: true
        }
      ]
    }
  }
})
