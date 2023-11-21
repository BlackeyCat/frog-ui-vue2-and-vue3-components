<template>
  <div>
    <span>{{ Vue2Version }}</span>
    <demo-component />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, isVue3, isVue2 } from "vue-demi";

export default defineComponent({
  name: "App",
  data() {
    return {
      Vue2Version: isVue2 ? "Vue2" : "Vue3"
    }
  },
  setup() {
  },
});
</script>

<style lang="less" scoped>
body>div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo-splitview {
  background: rgba(0, 0, 0, 0.05);

  .left,
  .right {
    padding: 8px;
    height: 100px;
  }
}

.zoom {
  padding: 1em;
  margin-bottom: 1em;
  border: 1px dashed #ccc;
}
</style>
