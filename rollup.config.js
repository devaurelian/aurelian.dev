import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run start` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/assets/js/main.js',
  output: {
    dir: '_site/assets/js/',
    format: 'cjs'
  },
  plugins: [
    nodeResolve(),
    production && terser({ output: { comments: false } }) // minify, but only in production
  ]
};