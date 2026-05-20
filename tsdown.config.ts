import { defineConfig, type UserConfig } from 'tsdown';

const baseUmdOptions = {
  format: 'umd',
  outDir: 'umd',
  globalName: 'StyleToJS',
  target: 'es2023',
  outputOptions: {
    globals: {
      'style-to-object': 'StyleToObject',
    },
    entryFileNames: '[name].js',
  },
} satisfies UserConfig;

export default defineConfig([
  {
    format: ['esm', 'cjs'],
    target: 'es2023',
    entry: ['src/index.ts'],
    platform: 'neutral',
    exports: {
      packageJson: false,
    },
  },
  {
    entry: {
      'style-to-js': 'src/index.ts',
    },
    ...baseUmdOptions,
  },
  {
    entry: {
      'style-to-js.min': 'src/index.ts',
    },
    minify: true,
    ...baseUmdOptions,
  },
]);
