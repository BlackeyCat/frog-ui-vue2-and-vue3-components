/**
 * 点击复制
 */
 import { renameDirective } from './rename-vue2-vue3'

 export const clickCopy = renameDirective({
    bind(el:HTMLElement, binding:Record<string, any>, vnode:{context: any}) {
        const { value } = binding;
        el.dataset.customCopyValue = value;
        el.onclick = event => {
            event.stopPropagation();
            function copyHandler(e:Event&{clipboardData: any}) {
                const text = `${el.dataset.customCopyValue}`;
                e.clipboardData.setData('text/plain', text);
                e.preventDefault();
                if (binding.arg && typeof vnode.context[binding.arg] === 'function') {
                    vnode.context[binding.arg]();
                }
            }
            document.addEventListener('copy', copyHandler);
            // 执行 copy 命令
            document.execCommand('copy');
            // 移除绑定事件
            document.removeEventListener('copy', copyHandler);
        };
    },
    componentUpdated(el:HTMLElement, binding:Record<string, any>) {
        const { value } = binding;
        el.dataset.customCopyValue = value;
    },
    unbind(el:HTMLElement) {
        el.onclick = null;
    }
});