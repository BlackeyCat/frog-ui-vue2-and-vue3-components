/**
 * image
 */
declare module '*.png';
declare module '*.svg?raw';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
/**
 * lodash
 */
declare module 'lodash';
/**
 * vue
 */
declare module '*.vue' {
    import { App, defineComponent } from 'vue-demi';
    const component: ReturnType<typeof defineComponent> & {
        install?(app: App): void;
    };
    export default component;
}

declare module '@/common/*'
