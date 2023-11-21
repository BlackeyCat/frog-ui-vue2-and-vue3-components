import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

import FrogUI from '../../src/index'; // 本地导入


app.use(FrogUI);
app.mount('#app');
console.log(FrogUI);

