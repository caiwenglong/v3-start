import { resolve } from 'path';
/*
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-02 16:44:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
    ],
    dedupe: ['vue'],
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:8080`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp('/api'), ''),
      }
    }
  }
})
