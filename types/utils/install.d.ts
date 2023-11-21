import { App } from 'vue-demi';
export type installArgument = App | any;
export type SFCWithInstall<T> = T & {
    install: (vue: installArgument) => void;
};
export declare function makePlugin<T>(comp: T & {
    install?: (vue: installArgument) => void;
}): SFCWithInstall<T>;
