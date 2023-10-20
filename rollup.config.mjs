import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const getConfig = (minify = false) => ({
  input: 'src/index.ts',
  output: {
    file: `umd/style-to-js${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'StyleToJS',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      declaration: false,
      declarationMap: false,
      module: 'esnext',
    }),
    minify && terser(),
  ],
});

const configs = [getConfig(), getConfig(true)];

export default configs;
