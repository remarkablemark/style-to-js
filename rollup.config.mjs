import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const getConfig = (minify = false) => ({
  input: 'cjs/index.js',
  output: {
    file: `umd/style-to-js${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'StyleToJS',
    sourcemap: true,
  },
  plugins: [commonjs(), resolve(), minify && terser()],
});

const configs = [getConfig(), getConfig(true)];

export default configs;
