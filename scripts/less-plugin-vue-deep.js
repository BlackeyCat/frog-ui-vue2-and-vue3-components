/**
 * less 插件
 * vue2 /deep/ 转换成 vue3 :deep()
 */
module.exports = {
    install: function (_, pluginManager) {
        class PreProcessor {
            process(stylesheet) {
                const deep_var = '@{deep}';
                const vue_2_deep = '/deep/';
                const less_var = '@deep: ~\':deep()\';\n';
                stylesheet = less_var + stylesheet;
                stylesheet = stylesheet.replace(new RegExp(vue_2_deep, 'gm'), deep_var);
                return stylesheet;
            }
        }
        pluginManager.addPreProcessor(new PreProcessor());
    },
};