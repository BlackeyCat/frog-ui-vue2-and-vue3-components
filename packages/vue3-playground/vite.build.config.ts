import path from 'path';
import { defineConfig, mergeConfig } from 'vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import autoImportPlugin from '../../scripts/plugins/auto-import';
import vueDemi from 'vue-demi';
import vue3 from '@vitejs/plugin-vue';
import lessPluginVueDeep from '../../scripts/less-plugin-vue-deep';

import { root_v3 as root_lib, createSingleBuildConfig as createConfig } from '../../scripts/build-config';

export const createSingleBuildConfig = function (entry: string, outDir: string) {
    const config = defineConfig({
        root: root_lib,
        resolve: {
            alias: {
                ['vue-demi']: path.resolve(root_lib, 'node_modules/vue-demi/lib/v3/index.mjs'),
                ['vue']: path.resolve(root_lib, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
            },
        },
        // @ts-ignore
        plugins: [viteCommonjs(), vue3(), autoImportPlugin(vueDemi.isVue2 ? '-2' : '')],
        css: {
            preprocessorOptions: {
                less: {
                    plugins: [lessPluginVueDeep],
                },
            },
        },
    });
    return mergeConfig(createConfig(entry, outDir), config);
};
