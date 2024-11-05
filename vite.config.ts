import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
// import { visualizer } from 'rollup-plugin-visualizer'
// import viteImagemin from "vite-plugin-imagemin"
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
    viteCompression({
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    }),
    // visualizer(),
    // viteImagemin() src/assets/JING411.jpg
  ],
  css: {
    devSourcemap: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts']
        }
      }
    }
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
