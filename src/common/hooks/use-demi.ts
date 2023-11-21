import { reactive, isVue3, getCurrentInstance, computed } from 'vue-demi';
// 一些公共方法，兼容vue2，vue3
export const usePickerOptions = function (options: Record<string, any>) {
    const pickerOptions = isVue3 ? options : { 'picker-options': options };
    return { pickerOptions };
};

export const useModelValue = function (v2 = 'visible', v3 = 'model-value') {
    const modelValue = reactive({
        bind: isVue3 ? v3 : v2,
        on: isVue3 ? `update:${v3}` : `update:${v2}`,
    });
    return { modelValue };
};

export const useDialogModelValue = function () {
    const { modelValue } = useModelValue();
    return { modelValue };
};

export const usePopoverModelValue = function () {
    const { modelValue } = useModelValue('value', 'visible');
    return { modelValue };
};

export const useListeners = function () {
    const listeners = computed(() => {
        if (isVue3) {
            return {};
        }
        const vm: any = getCurrentInstance();
        return vm?.proxy?.$listeners || {};
    });
    // console.log('useListeners', listeners.value);
    return { listeners };
};
