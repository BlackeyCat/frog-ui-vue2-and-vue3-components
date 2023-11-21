<template>
    <div>
        <span>{{ vueVersion }}</span>
        <demo-component />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, isVue3, isVue2 } from 'vue-demi';

export default defineComponent({
    name: 'App',
    components: {
    },
    setup() {
        const vueVersion = ref(isVue2 ? 'Vue2' : 'Vue3');

        console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`);

        return {
            vueVersion,
        };
    },
});
</script>

<style>
body > div {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<style lang="less" scoped>
.demo-splitview {
    background: rgba(0, 0, 0, 0.05);

    .left,
    .right {
        padding: 8px;
        height: 100px;
    }
}
</style>
