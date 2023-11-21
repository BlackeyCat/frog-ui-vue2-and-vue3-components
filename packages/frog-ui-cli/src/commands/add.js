import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
import Listr from 'listr';
import inquirer from 'inquirer';
import fs from 'fs';
import _ from 'lodash';
import { effectConfig  } from './effect.js'
const copy = promisify(ncp);

const rootPath = process.cwd();
const srcCompPath = path.join(rootPath, 'src/components');
const docPath = path.join(rootPath, 'docs/guide');
async function copySourceFiles({ filesPath }) {
    for (let i = 0; i < filesPath.length; i++) {
        const { source, target } = filesPath[i];
        await copy(source, target, {
            clobber: false,
        });
    }
}

function walk(path, callback) {
    const files = fs.readdirSync(path);
    files.forEach(function (file) {
        const childFilePath = path + '/' + file;
        if (fs.statSync(childFilePath).isFile()) {
            callback(path, file);
        } else {
            walk(childFilePath, callback);
        }
    });
}

function renameFile(oldPath, newPath) {
    fs.renameSync(oldPath, newPath);
}

function replaceInfo(filePath, componentName, componentDesc) {
    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return err;
        }
        let str = data.toString();
        str = str.replace(/{{component-name}}/g, componentName).replace(/{{component-desc}}/g, componentDesc);
        // eslint-disable-next-line consistent-return
        fs.writeFile(filePath, str, function (err) {
            if (err) {return err;}
        });
    });
}

async function modifyInfo({ filesPath, componentName, componentDesc}) {
    filesPath.forEach(async ({ target }) => {
        walk(target, function (path, fileName) {
            const oldPath = path + '/' + fileName;
            const newPath = path + '/' + fileName.replace('component-template', componentName);
            renameFile(oldPath, newPath);
            replaceInfo(newPath, componentName, componentDesc);
        });
    });
}

async function getComponentInfos() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'componentName',
            message: 'Component name (kebab-case):',
            default: 'demo-component',
        },
        {
            type: 'input',
            name: 'componentZhName',
            message: '请输入你要新建的组件名（中文）:',
            default: '示例组件',
        },
        {
            type: 'input',
            message: '请输入组件的功能描述：',
            name: 'componentDesc',
            default: '默认：这是一个新组件'
        }
    ]);
}

async function addCommponentInConfig({ componentName, componentZhName, componentDesc }) {
    const configFilePath = path.join(rootPath, 'components.json');
    const obj = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
    obj[componentName] = {
        name: componentName,
        zhName: componentZhName,
        desc: componentDesc,
        url: `./src/components/${componentName}/index.ts`,
    };

    const json = JSON.stringify(obj, null, 4);

    fs.writeFile(configFilePath, json, err => {
        if (err) {
            console.error(err);
        }
    });
}

async function modifyEntry({ componentName }) {
    const entryFile = path.join(rootPath, 'src/entry.ts');
    const oldContent = fs.readFileSync(entryFile, 'UTF-8');
    const lines = oldContent.split(/\r?\n/).filter(line => !!line.trim());
    lines.push(`export { default as ${_.startCase(componentName).replace(/\s/g, '')} } from './components/${componentName}';\n`);
    fs.writeFileSync(entryFile, lines.join('\n'));
}

const configPath = path.join(rootPath, 'docs/.vitepress/config.js')
async function updateConfig() {
    const oldContent = fs.readFileSync(configPath, 'UTF-8');
    fs.writeFileSync(configPath, oldContent.replace(/业务组件库/, '$业务组件库$'));
    fs.writeFileSync(configPath, oldContent.replace(/\$业务组件库\$/, '业务组件库'));
}

export async function addComponent(options) {
    const meta = await getComponentInfos();
    meta.componentName = _.kebabCase(meta.componentName);
    const templateDir = path.resolve(new URL(import.meta.url).pathname, '../../../template/component-template');
    const filesPath = [
        {
            source: path.join(templateDir, 'doc'),
            target: `${docPath}/${meta.componentName}`,
        },
        {
            source: path.join(templateDir, 'comp'),
            target: `${srcCompPath}/${meta.componentName}`,
        }
    ];

    options = {
        filesPath,
        ...meta,
    };

    const tasks = new Listr([
        {
            title: 'Copying',
            task: () => copySourceFiles(options).catch(e => console.warn(e)),
        },
        {
            title: 'Modifying',
            task: () => modifyInfo(options).catch(e => console.warn(e)),
        },
        {
            title: 'add config',
            task: () => addCommponentInConfig(options).catch(e => console.warn(e)),
        },
        {
            title: 'Modify Entry',
            task: () => modifyEntry(options).catch(e => console.warn(e)),
        },
        effectConfig
    ]);
    await tasks.run();
    return true;
}
