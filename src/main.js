import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
// import('./hello');
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import VitePlusUi from './package';

import './style/var.less';
import './style/index.less';
// import VitePlusUi from 'vite-plus-ui'
// import 'vite-plus-ui/vite-ui.css';

import router from './router/index.js';

// import 'lib-flexible';
let app = createApp(App);

app.use(createPinia()); // pinia

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
    //   console.log(key)
}
app.use(ElementPlus, {
    // size: 'middle',
    // zIndex: 1,
    locale
});
app.use(VitePlusUi);

app.use(router);
app.mount('#app');

console.log('----');
console.log(app.config);
// 应用级错误处理器
app.config.errorHandler = (err) => {
    /* 处理错误 */
    // debugger
    console.error(err);
};
