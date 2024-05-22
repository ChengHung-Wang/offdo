<template>
  <div element-loading-text="我是 Loading 動畫" v-loading="loading">
    <navbar />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  max-width: 100vw;
}
</style>
<script setup lang="ts">
import Navbar from "@/components/Universal/Navbar/NavbarFixedTop.vue";
import { vLoading } from "element-plus";
import { ref } from "vue";

const loading = ref(false);

setTimeout(() => {
  loading.value = false;
}, 3000);
</script>
