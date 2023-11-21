import path from 'path';
import glob from 'glob';
import { defineConfig } from 'vite';
/** 导出通用配置 */
export const root = path.resolve(__dirname, '../');
export const root_v2 = path.resolve(root, 'packages/vue2-playground');
export const root_v3 = path.resolve(root, 'packages/vue3-playground');
/** 创建单体构建配置 */
export const createSingleBuildConfig = function (entry: string, outDir: string) {
    const config = defineConfig({
        optimizeDeps: {
            exclude: ['vue-demi'],
        },
        resolve: {
            alias: {
                ['@']: path.resolve(root, 'src'),
                ['@components']: path.resolve(root, 'src/common/components'),
            },
        },
        build: {
            outDir: outDir,
            emptyOutDir: false,
            lib: {
                entry: entry,
                formats: ['es', 'umd'],
                name: 'index',
                fileName: format => `index.${format}.js`,
            },
            rollupOptions: {
                // includes: ['xss', 'fecha'],
                external: ['vue', 'lodash', 'vue-demi', '@vue/composition-api'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    exports: 'named',
                    globals: {
                        ['vue']: 'Vue',
                        ['lodash']: '_',
                        ['vue-demi']: 'VueDemi',
                        ['@vue/composition-api']: 'VueCompositionAPI',
                    },
                },
            },
        },
    });
    return config;
};
/** 创建组件列表 */
export const createComponentList = function (version: '2' | '3') {
    const build_input_path = path.resolve(root, 'src/components/*/index.ts');
    const build_input_paths = glob.globSync(build_input_path);
    let componentsList = build_input_paths.map((filePath: string) => {
        const list = filePath.split('/');
        const name = list[list.length - 2];
        const entry = path.resolve(filePath);
        return { name, entry, outDir: path.resolve(root, `lib/v${version}/components/${name}`) };
    }) as Record<string, string>[];
    return componentsList;
};
