/* 
指令：v-portal-to
作用：将指定的元素插入到指定的容器中
参数类型：object| undefined
参数说明：{
    target: string, // 要挂载到目标容器的id或者选择器的值
    el: string // 必传，要挂载的元素的id或者选择器的值
}
示例：<ks-image
    :src="src"
    :previewSrcList="imgList"
    v-portal-to="{
        target: 'body',
        el: '.ks-admin-slide'
    }"
></ks-image>
*/


import { renameDirective } from './rename-vue2-vue3'

interface IBinding {
    value: {
        target?: string,
        el: string  // 必传
    }
}
export default renameDirective({
    name: 'portal-to',
    updated(el: HTMLElement, binding: IBinding) {
        const target = binding.value?.target || 'body'; // 不传则默认挂载到body
        const targetContainer = document.querySelector(target) as HTMLElement; // 通过选择器获取目标容器
        if (targetContainer) {
            setTimeout(() => {
                const elToTarget =  el.querySelector(binding?.value?.el) // 通过选择器获取要挂载的元素，不传则默认挂载当前元素
                elToTarget && targetContainer.appendChild(elToTarget);
            }, 0);
        } else {
          console.warn(`v-portal-to: could not find container element with selector "${target}"`);
        }
      }
});