/*
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-06 16:09:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'

import { setupNaive } from '@/plugins';
import { setupStore } from '@/store';

import { AppProvider } from '@/components/Application';


const app = createApp(App)
const appProvider = createApp(AppProvider);



setupNaive(app);
//优先挂载一下 Provider 解决路由守卫，Axios中可使用，Dialog，Message 等之类组件
appProvider.mount('#appProvider', true);


// 挂载状态管理
setupStore(app);

app.mount('#app')
