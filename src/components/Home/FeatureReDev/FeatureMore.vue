<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useHomePageState } from "@/store/home-page-state";
import { useIntersectionObserver } from "@vueuse/core";

const homePageState = useHomePageState();
const targetListenerDOM = ref<null | HTMLElement>(null);

onMounted(() => {
  homePageState.feature.more = homePageState.featureItemRegister(targetListenerDOM);
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
    <div class="container">
      <div class="row">
        <div class="col-sm-12 position-relative full-screen">
          <div class="text">
            <h2 class="title text-bold-large w-100"> 更多服務</h2>
            <div class="description">另外我們還提供許多不同的客製化服務項目，我們會盡可能地<br />完成你的需求，為您打造屬於你的葬禮</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#feature-more {
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 8;
  position: relative;
  max-width: 100vw;
  background-image: url("@/assets/images/feature/more/more.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  .text {
    position: absolute;
    bottom: 80px;
    background-color: rgba(0, 0, 0, .6);
    .title, .description {
      transform: scaleX(125%);
      transform-origin: left;
      text-align: left;
      color: white;
      width: calc(100% - ((125% - 100%) / 2) - 40px);
    }
    .title {
      font-size: 72px;
      font-weight: bold;
      letter-spacing: .09em;
    }
    .description {
      font-size: 24px;
      font-weight: 700;
    }
  }
}

</style>
