import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import { terser } from "rollup-plugin-terser";
let pkg = require('./package.json');

let externalPkg = Object.keys(pkg.dependencies);
const production = !process.env.ROLLUP_WATCH;
export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      plugins: [production && terser()]
    }
  ],
  external: externalPkg,
  plugins: [
    external(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
