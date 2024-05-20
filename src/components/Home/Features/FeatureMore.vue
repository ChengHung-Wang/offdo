<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useHomePageState } from "@/store/home-page-state";

const homePageState = useHomePageState();
const targetListenerDOM = ref<null | HTMLElement>(null);

onMounted(() => {
  homePageState.feature.more = homePageState.featureItemRegister(
      targetListenerDOM, '', '', '', null);
  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        homePageState.feature.more.enter = isIntersecting;
      }
  )

});
</script>

<template>
  <section id="feature-more" ref="targetListenerDOM">
    <h1>更多特色服務</h1>
  </section>
</template>

<style scoped lang="scss">
#feature-more {
  background-color: #E0FF00;
  min-height: 100vh;
}
</style>
