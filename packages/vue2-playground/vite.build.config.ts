import path from 'path';
import vueDemi from 'vue-demi';
import { defineConfig, mergeConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import autoImportPlugin from '../../scripts/plugins/auto-import';
import { root_v2 as root_lib, createSingleBuildConfig as createConfig } from '../../scripts/build-config';

export const createSingleBuildConfig = function (entry: string, outDir: string) {
    const config = defineConfig({
        root: root_lib,
        resolve: {
            alias: {
                ['vue-demi']: path.resolve(root_lib, 'node_modules/vue-demi/lib/v2/index.mjs'),
                ['vue']: path.resolve(root_lib, 'node_modules/vue/dist/vue.runtime.esm.js'),
            },
        },
        // @ts-ignore
        plugins: [viteCommonjs(), vue2(), autoImportPlugin(vueDemi.isVue2 ? '-2' : '')],
    });
    return mergeConfig(createConfig(entry, outDir), config);
};
