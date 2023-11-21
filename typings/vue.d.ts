
declare module '*.vue' {
    import { App, defineComponent } from 'vue-demi';
    const component: ReturnType<typeof defineComponent> & {
      install?(app: App): void;
    }
    export default component;
}
