/*
 * @Author: your name
 * @Date: 2021-12-02 16:32:46
 * @LastEditTime: 2021-12-02 17:19:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\api\website.ts
 */
import http from '@/utils/https/axios';

/**
 * @description: 获取网站列表
 */
 export function getWebsiteList() {
  return http.request({
    url: '/api/demo/website/list',
    method: 'get',
  }, {
    isShowMessage: true
  });
}