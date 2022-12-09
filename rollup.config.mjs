import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { readFileSync } from 'node:fs'
const pkg = JSON.parse(
  readFileSync('./package.json', {
    encoding: 'utf8'
  })
)
// import json from '@rollup/plugin-json'
// import replace from '@rollup/plugin-replace'
// import { terser } from 'rollup-plugin-terser'
// const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  // { index: 'src/index.ts', cli: 'src/cli.ts' },
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: isDev,
      exports: 'auto',
      esModule: true,
      generatedCode: {
        reservedNamesAsProps: false
      },
      interop: 'compat',
      systemNullSetters: false
    }
    // { format: 'esm', file: pkg.module, sourcemap: isDev }
    // {
    //   dir: 'dist',
    //   format: 'cjs',
    //   sourcemap: isDev,
    //   exports: 'auto'
    // },
  ],

  plugins: [
    nodeResolve({
      preferBuiltins: true
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.build.json', sourceMap: isDev })
  ],
  external: [...(pkg.dependencies ? Object.keys(pkg.dependencies) : [])],
  makeAbsoluteExternalsRelative: true,
  preserveEntrySignatures: 'strict'
}

export default config
