// v-append-to

export default {
    name: 'append-to',
    mounted(el: HTMLElement, binding: { value?: string }) {
        let container: null | HTMLElement;
        if (binding.value === undefined) {
            container = document.body;
        } else {
            container = document.getElementById(binding.value);
        }
        container && container.appendChild(el);
    },
};
