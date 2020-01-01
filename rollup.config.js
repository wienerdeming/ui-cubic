import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
let pkg = require('./package.json');

let externalPkg = Object.keys(pkg.dependencies);

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: externalPkg,
  plugins: [
    external(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
