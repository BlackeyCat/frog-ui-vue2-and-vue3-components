export declare const usePickerOptions: (options: Record<string, any>) => {
    pickerOptions: Record<string, any>;
};
export declare const useModelValue: (v2?: string, v3?: string) => {
    modelValue: {
        bind: string;
        on: string;
    };
};
export declare const useDialogModelValue: () => {
    modelValue: {
        bind: string;
        on: string;
    };
};
export declare const usePopoverModelValue: () => {
    modelValue: {
        bind: string;
        on: string;
    };
};
export declare const useListeners: () => {
    listeners: import("vue-demi").ComputedRef<any>;
};
