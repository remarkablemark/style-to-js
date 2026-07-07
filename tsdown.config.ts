import { defineConfig, type UserConfig } from 'tsdown';

const entry = 'src/index.ts';
const sourcemap = true;
const external = ['style-to-object'];

const baseConfig = {
  entry,
  sourcemap,
  target: 'es2023',
  platform: 'neutral',
  exports: {
    packageJson: false,
    inlinedDependencies: false,
  },
  deps: {
    neverBundle: external,
  },
} satisfies UserConfig;

const umdBase = {
  ...baseConfig,
  format: 'umd' as const,
  outDir: 'umd',
  globalName: 'StyleToJS',
  deps: {
    alwaysBundle: external,
  },
} satisfies UserConfig;

export default defineConfig([
  // ESM and CJS build
  {
    ...baseConfig,
    format: ['esm', 'cjs'],
    outDir: 'dist',
    dts: true,
  },

  // UMD build (unminified)
  {
    ...umdBase,
    outputOptions: {
      entryFileNames: 'style-to-js.js',
    },
  },

  // UMD build (minified)
  {
    ...umdBase,
    minify: true,
    outputOptions: {
      entryFileNames: 'style-to-js.min.js',
    },
  },
]);
