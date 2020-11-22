import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

/**
 * Builds rollup config for development (default) or production (minify = true).
 *
 * @param {Boolean} [minify=false]
 * @return {Object}
 */
const config = (minify = false) => ({
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
    typescript({ module: 'es2015' }),
    minify && terser(),
  ],
});

export default [config(), config(true)];
