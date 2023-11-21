<template>
<div>
    <h1>demo-component</h1>
    <slot></slot>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
    name: '{{component-name}}',
    props: { },
    setup: function (props) {
        return {
        };
    }
});
</script>
<style lang="less" scoped>
</style>

