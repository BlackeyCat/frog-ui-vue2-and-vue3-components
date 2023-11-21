import DefaultTheme from 'vitepress/theme';


/** 本地导入 */
import FrogUI from '../../../src/index';


/** 自定义文字着色组件 */
import CoRed from './co-red.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(FrogUI);
        app.component('co-red', CoRed);
    },
};
