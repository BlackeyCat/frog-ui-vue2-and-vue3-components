import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import lessPluginVueDeep from '../scripts/less-plugin-vue-deep';
import autoImportPlugin from '../scripts/plugins/auto-import'; 

export default defineConfig({
    plugins: [svgLoader(), autoImportPlugin()],
    server: {
        open: true,
        port: 4001,
    },
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: atRule => {
                            if (atRule.name === 'charset') {
                                atRule.remove();
                            }
                        },
                    },
                },
            ],
        },
        preprocessorOptions: {
            less: {
                plugins: [lessPluginVueDeep],
            },
        },
    },
    build: {
        chunkSizeWarningLimit: 1000
    },
});
