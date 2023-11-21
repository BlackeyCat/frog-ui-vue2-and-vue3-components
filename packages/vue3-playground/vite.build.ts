import path from 'path';
import { version as vueVersion } from 'vue';
import { build } from 'vite';
import vueDemi from 'vue-demi';
import { createSingleBuildConfig } from './vite.build.config';
import { createComponentList } from '../../scripts/build-config';
const chalk = require('chalk');
const version = '3';
const componentsList = createComponentList(version);

(async () => {
    console.warn(chalk.green(`======= vue: ${vueVersion} =============`));
    console.warn(chalk.green(`======= vue-demi: ${vueDemi.version} ========`));
    console.warn(chalk.green(`======= component-count: ${componentsList.length} ========`));
    // 分包构建
    console.warn(chalk.green(`======= 分包构建 =======`));
    const buildConfigList = componentsList.map(({ entry, outDir }) => createSingleBuildConfig(entry, outDir));
    await Promise.all(buildConfigList.map(options => build({ configFile: false, envFile: false, ...options })));
    // 总包构建
    console.warn(chalk.green(`======= 总包构建 =======`));
    const outDir = path.resolve(__dirname, `../../lib/v${version}`);
    const entry = path.resolve(__dirname, '../../src/index.ts');
    await build({ configFile: false, envFile: false, ...createSingleBuildConfig(entry, outDir) });
})();
