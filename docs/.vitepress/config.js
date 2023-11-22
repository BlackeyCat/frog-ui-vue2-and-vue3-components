import { defineConfig } from 'vitepress';
import sidebarGuide from './routes/guide';
export default defineConfig({
    lang: 'en-US',
    title: '小青蛙组件库',
    base: '/frog-ui-vue2-and-vue3-components/dist/',
    description: 'Vite & Vue powered static site generator.',
    lastUpdated: true,
    outDir: 'dist',
    head: [
        ['script', { src: '//cdn.jsdelivr.net/npm/hls.js@latest' }],
        ['script', { src: '//cdn.bootcdn.net/ajax/libs/flv.js/1.6.2/flv.min.js' }],
    ],
    themeConfig: {
        sidebar: {
            '/guide/': sidebarGuide(),
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present @FrogUi',
        },
    },
});
