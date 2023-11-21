/**
 * postinstall 包在宿主工作空间被安装后执行的脚本
 *
 * 强依赖: vue-demi@latest
 * 强宿主依赖：[vue@2.6.14 或者 vue@3.2.27]
 *
 * npx vue-demi-switch 2
 * npx vue-demi-switch 3
 * yarn add vue@2.6.14 -D
 * yarn add vue@3.2.27 -D
 * yarn add @vue/composition-api -D
 */
const fse = require('fs-extra');
const path = require('path');
const packageJson = require('../package.json');
const chalk = require('chalk');
const execa = require('execa');
const run = (bin, args, opts = {}) => execa(bin, args, { stdio: 'inherit', ...opts });

try {
    const vue = require('vue');
    const version = String(vue.version).startsWith('2') ? 2 : 3;
    const packageJsonPath = path.join(__dirname, '../package.json');
    const distDir = `lib/v${version}`;
    const exportJson = {
        main: `${distDir}/index.umd.js`,
        module: `${distDir}/index.es.js`,
        style: `${distDir}/style.css`,
    };

    const newPackageJson = Object.assign(packageJson, exportJson);

    fse.writeJsonSync(packageJsonPath, newPackageJson, { spaces: 4 });

    run('npx', ['vue-demi-switch', version]);
} catch (error) {
    console.warn(chalk.red('======= Error ========'));
    console.log(chalk.yellow(error.message));
    console.warn(chalk.red('======================'));
}
