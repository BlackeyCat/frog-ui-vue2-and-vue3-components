export declare const vue3namespace: {
    beforeMount: string;
    mounted: string;
    updated: string;
    unmounted: string;
};
export declare const vue2namespace: {
    bind: string;
    inserted: string;
    componentUpdated: string;
    unbind: string;
};
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
export declare const renameDirective: (directives: Vue2Directives | Vue3Directives, vueVersion?: number) => Record<string, any>;
export {};
