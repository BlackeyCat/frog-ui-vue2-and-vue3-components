import { Plugin } from 'vite'
/* 
* @fileReplaceTag 替换后缀
*/
export default function autoImportPlugin(fileReplaceTag?: string): Plugin {
  const indexRE = /\index.ts$/;
  const needChoose23RE = /@{autoImport}/g;
  return {
    // 插件名称
    name: 'auto-import',
    // 该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件
    enforce: 'pre',
    // 代码转译，这个函数的功能类似于 `webpack` 的 `loader`
    // https://rollupjs.org/plugin-development/#transform
    transform(code, id) {
      if (!indexRE.test(id) || !needChoose23RE.test(code)) return { code, map: null };
      let transformCode = code.replace(/@{autoImport}/g, fileReplaceTag ? fileReplaceTag : '')
      // 将转换后的代码返回
      return { code: transformCode, map: null };
    }
  }
}
