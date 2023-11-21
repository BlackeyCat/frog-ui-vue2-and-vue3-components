import { App } from 'vue-demi';
import { createNamespace, camelize } from './tool';

export type installArgument = App | any;

export type SFCWithInstall<T> = T & {
    install: (vue: installArgument) => void;
};

export function makePlugin<T>(comp: T & { install?: (vue: installArgument) => void }) {
    comp.install = (vue: installArgument) => {
        const name = (<any> comp).name;
        const [prefixDashedName, prefixCamelizeName] = createNamespace(name);
        vue!.component(prefixDashedName, comp);
        vue!.component(prefixCamelizeName, comp);
        vue!.component(name, comp);
        vue!.component(camelize(`-${name}`), comp);
    };
    return comp as SFCWithInstall<T>;
}
