import { makePlugin } from '../../utils/install';
// @ts-ignore
import Component from './collapse-transition@{autoImport}'; // 极少情况，vue2和vue3无法再一个文件内兼容时，分别引入不同版本的文件
export default makePlugin(Component);