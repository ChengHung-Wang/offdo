<template>
  <div id="app" element-loading-text="我是 Loading 動畫" v-loading="loading">
    <navbar />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-loading-mask {
  backdrop-filter: blur(20px) saturate(180%);
}
</style>
<script setup lang="ts">
import Navbar from "@/components/Universal/Navbar/NavbarFixedTop.vue";
import { vLoading } from "element-plus";
import { ref } from "vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3000);
</script>
