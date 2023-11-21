import { isVue2 } from "vue-demi";

/* 
vue2.0和vue3.0中的区别
vue2.0中和vue3.0中 自定义指令的原理是一致的，只是生命周期 钩子函数不同  

vue2中绑定的钩子函数为

bind - 指令绑定到元素后发生。只发生一次。
inserted - 元素插入父 DOM 后发生。
update - 当元素更新，但子元素尚未更新时，将调用此钩子。
componentUpdated - 一旦组件和子级被更新，就会调用这个钩子。
unbind - 一旦指令被移除，就会调用这个钩子。也只调用一次。
vue3.0

将钩子函数的命名与生命周期的钩子函数命名相一致

bind → beforeMount
inserted → mounted
beforeUpdate：新的！这是在元素本身更新之前调用的，很像组件生命周期钩子。
componentUpdated → updated
beforeUnmount：新的！与组件生命周期钩子类似，它将在卸载元素之前调用。
unbind -> unmounted
*/
export const vue3namespace = {
    beforeMount: isVue2 ? 'bind': 'beforeMount',
    mounted: isVue2 ? 'inserted': 'mounted',
    updated: isVue2 ? 'componentUpdated': 'updated',
    unmounted: isVue2 ? 'unbind': 'unmounted',
}
export const vue2namespace = {
    bind: isVue2 ? 'bind': 'beforeMount',
    inserted: isVue2 ? 'inserted': 'mounted',
    componentUpdated: isVue2 ? 'componentUpdated': 'updated',
    unbind: isVue2 ? 'unbind': 'unmounted',
}

interface Vue2Directives {
    bind?: any;
    inserted?: any;
    update?: any;
    componentUpdated?: any;
    unbind?: any;
    [key: string]: any;
}

interface Vue3Directives {
    beforeMount?: any;
    mounted?: any;
    beforeUpdate?: any;
    updated?: any;
    beforeUnmount?: any;
    unmounted?: any;
    [key: string]: any;
}
const vue2Key = ['bind', 'inserted', 'update', 'componentUpdated', 'unbind'];
const vue3Key = ['beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'];

export const renameDirective = (directives: Vue2Directives | Vue3Directives, vueVersion?: number) => {
    // 判断版本
    let isVue2Directives,isVue3Directives;
    let objectDirectives:Record<string, any> = {};
    if(!vueVersion) {
        isVue2Directives = Object.keys(directives).some(key => vue2Key.includes(key))
        isVue3Directives = Object.keys(directives).some(key => vue3Key.includes(key))
    } else {
        isVue2Directives = vueVersion === 2;
        isVue3Directives = vueVersion === 3;
    }
    if(!(isVue2Directives || isVue3Directives)) {
        console.warn(`The current directive may not be compatible the vue2 or vue3`, directives)
        return directives
    }
    let namespaced = {};
    // 按照vue2格式转换
    if(isVue2Directives) {
        namespaced = vue2namespace
    }
    // 按照vue3格式转换
    if(isVue3Directives) {
        namespaced = vue3namespace
    }
    Object.keys(directives).forEach(k => {
        if(Object.keys(namespaced).includes(k)) {
            objectDirectives[(namespaced as Record<string, any>)[k]] = (directives as Record<string, any>)[k];
        } 
        objectDirectives[k] = (directives as Record<string, any>)[k];
    })
    return objectDirectives
}