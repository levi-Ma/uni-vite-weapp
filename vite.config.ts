import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        'vue',
        'pinia',
        {
          '@dcloudio/uni-app': [
            'onLaunch',
            'onInit',
            'onLoad',
            'onShow',
            'onReady',
            'onHide',
            'onUnload',
            'onResize',
            'onReady',
            'onBackPress',
            'onPullDownRefresh',
            'onReachBottom',
            'onTabItemTap',
            'onShareAppMessage',
            'onPageScroll',
            'onNavigationBarButtonTap',
            'onBackPress',
            'onShareTimeline',
            'onAddToFavorites',
          ],
        },
      ],
      // Identifiers to be ignored
      ignore: ['createApp'],
      // Auto import for all module exports under directories
      dirs: [],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: 'src/types/auto-import.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
