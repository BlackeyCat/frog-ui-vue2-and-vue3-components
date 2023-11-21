import Vue from 'vue';
import App from './App.vue';

import FrogUI from '../../src/index'; // 本地导入


Vue.config.productionTip = false;
Vue.use(FrogUI);

new Vue({ render: h => h(App) }).$mount('#app');
console.log(FrogUI);
