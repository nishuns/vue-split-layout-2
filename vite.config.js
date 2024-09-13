import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; // For JSX support
import path from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      vue(),
      vueJsx(), // Add JSX plugin
    ],
    build: {
      lib: {
        // Entry point for your library
        entry: path.resolve(__dirname, './src/index.js'),
        name: 'VueSplitLayout', // Library name (for UMD format)
        fileName: (format) => {
          if (isProduction) {
            return `vue-split-layout.${format}.js`; // Match production format
          }
          return 'index.js'; // For development
        },
        formats: ['es', 'cjs', 'umd'], // Similar to Webpack's library targets (commonjs2)
      },
      outDir: isProduction ? './dist' : './docs', // Matching Webpack's output paths
      rollupOptions: {
        // Ensure Vue is treated as an external dependency, similar to Webpack's externals
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue', // Global variable for Vue in UMD format
          },
        },
      },
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js', // Similar to Webpack alias
      },
      extensions: ['*', '.js', '.vue', '.json', '.jsx'], // Matching Webpack extensions
    },
    server: {
      // Development server configuration (equivalent to Webpack's devServer)
      historyApiFallback: true,
      static: path.join(__dirname, './demo/dist'),
    },
    define: {
      // Similar to Webpack's DefinePlugin for production builds
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    },
  };
});
