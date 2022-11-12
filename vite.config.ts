import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import progress from 'vite-plugin-progress'
import tsconfigPaths from 'vite-tsconfig-paths'

const commonOutput = {
  preserveModules: true,
  entryFileNames: '[name].[format].js',
  sourcemap: 'inline'
} as const

module.exports = defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      input: 'src/b.ts',
      output: [
        {
          ...commonOutput,
          dir: resolve(__dirname, 'dist/cjs'),
          format: 'cjs'
        },
        {
          ...commonOutput,
          dir: resolve(__dirname, 'dist/esm'),
          format: 'esm'
        }
      ]
    }
  },
  plugins: [
    tsconfigPaths(),
    dts({
      entryRoot: resolve(__dirname, 'src'),
      outputDir: resolve(__dirname, 'dist/types')
    }),
    progress()
  ]
})
