// 引入公共样式
import './styles/base.less';

// 引入组件
import * as components from './entry';
import { installArgument } from './utils/install';
// 全局注册组件
const install = function (_vue: installArgument) {
    Object.values(components).forEach(comp => {
        if (!comp || !comp.name) {
            return;
        }
        comp.install(_vue);
    });
};

const plugin = {
    install,
};

// 单个导出
export * from './entry';

// 整体导出
export default plugin;
