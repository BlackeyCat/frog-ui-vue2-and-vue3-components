import { h as CreateElement, RendererElement, isVue2, Transition } from 'vue-demi';
type IEl = HTMLElement & {
    myDataset: Record<string, any>
};

const elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out';
const TransitionEvent:Record<string, any> = {
    beforeEnter(el:IEl) {
        el.style.transition = elTransition;
        if (!el.myDataset) {el.myDataset = {};}

        el.myDataset.oldPaddingTop = el.style.paddingTop;
        el.myDataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';

    },

    enter(el:IEl) {
        el.myDataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.myDataset.oldPaddingTop;
            el.style.paddingBottom = el.myDataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.myDataset.oldPaddingTop;
            el.style.paddingBottom = el.myDataset.oldPaddingBottom;
        }
        el.style.overflow = 'hidden';
    },

    afterEnter(el:IEl) {
        el.style.transition = '';
        el.style.height = '';
        el.style.overflow = el.myDataset.oldOverflow;

    },

    beforeLeave(el:IEl) {

        if (!el.myDataset) {el.myDataset = {};}
        el.myDataset.oldPaddingTop = el.style.paddingTop;
        el.myDataset.oldPaddingBottom = el.style.paddingBottom;
        el.myDataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },

    leave(el: IEl) {
        if (el.scrollHeight !== 0) {
            el.style.transition = elTransition;
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
        }
    },

    afterLeave(el: IEl) {
        el.style.transition = '';
        el.style.height = '';
        el.style.overflow = el.myDataset.oldOverflow;
        el.style.paddingTop = el.myDataset.oldPaddingTop;
        el.style.paddingBottom = el.myDataset.oldPaddingBottom;
    }
};
const ComponentOption = () => {
    if(isVue2) {
        return {
            name: 'collapse-transition',
            functional: true,
            render(h:typeof CreateElement, { children }: RendererElement) {
                const data = {
                    on: TransitionEvent
                };
                return h('transition', data, children);
            }
        };
    } else {
        return {
            name: 'collapse-transition',
            functional: true,
            render(context:RendererElement) {
                const Vue3TransitionEvent:Record<string, any> = {};
                Object.keys(TransitionEvent).forEach(key => {
                    const vue3Key = `on-${key}`.replace(/-(\w)/g, (all, letter) => {
                        return letter.toUpperCase()
                    })
                    Vue3TransitionEvent[vue3Key] = TransitionEvent[key]
                })
                return CreateElement(Transition, Vue3TransitionEvent, {default: () => context.$slots.default()});
            }
        };
    }
}

export default ComponentOption()