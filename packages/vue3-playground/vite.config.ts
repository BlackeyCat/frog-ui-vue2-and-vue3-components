import { defineConfig, mergeConfig } from 'vite';
import path from 'path';
import { version } from 'vue';
import vueDemi from 'vue-demi';
import { createSingleBuildConfig } from './vite.build.config';

const chalk = require('chalk');
console.warn(chalk.green(`======= vue: ${version} =============`));
console.warn(chalk.green(`======= vue-demi: ${vueDemi.version} ========`));

const outDir = path.resolve(__dirname, `../../lib/v3`);
const entry = path.resolve(__dirname, '../../src/index.ts');
const baseConfig = createSingleBuildConfig(entry, outDir);

export default mergeConfig(
    baseConfig,
    defineConfig({
        server: {
            open: true,
            port: 3001,
        },
    })
);
