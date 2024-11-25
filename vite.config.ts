import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 压缩gzip
import viteCompression from 'vite-plugin-compression'
// 打包进度
import progress from 'vite-plugin-progress'
// 自动重启
import ViteRestart from 'vite-plugin-restart'
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    progress(),
    viteCompression({
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    }),
    ViteRestart({
      restart: ['*.config.[jt]s', '**/config/*.[jt]s', '*.config.cjs']
    }),
    legacy()
  ],
  css: {
    devSourcemap: true
  },
  build: {
    //打包文件名称
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
/*   server: {
    host: '192.168.3.88',
    port: 8088,
    open: true
  }, */
  /*terser: {
    terserOptions: {
      compress: {
        drop_console: true, // 去除console
      }
    }
  }*/
})
