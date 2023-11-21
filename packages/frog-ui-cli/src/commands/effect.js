import path from 'path';
import fs from 'fs';

const configPath = path.join(process.cwd(), 'docs/.vitepress/config.js')
export async function updateConfig() {
    const oldContent = fs.readFileSync(configPath, 'UTF-8');
    fs.writeFileSync(configPath, oldContent.replace(/业务组件库/, '$业务组件库$'));
    fs.writeFileSync(configPath, oldContent.replace(/\$业务组件库\$/, '业务组件库'));
}

export const effectConfig = {
    title: 'Effect',
    task: () => updateConfig().catch(e => console.warn(e))
}