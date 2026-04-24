import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],

  source: {
    entry: {
      index: './src/index.tsx',  
    },
  },

  html: {
    outputStructure: 'flat',     
  },

  output: {
    filename: {
      html: '[name].html',     
    },
    distPath: {
      root: 'dist',
    },
  },
});
