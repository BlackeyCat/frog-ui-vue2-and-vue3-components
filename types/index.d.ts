import './styles/base.less';
import { installArgument } from './utils/install';
declare const plugin: {
    install: (_vue: installArgument) => void;
};
export * from './entry';
export default plugin;
