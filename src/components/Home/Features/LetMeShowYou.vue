<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
import { useHomePageState } from "@/store/home-page-state";
import { useIntersectionObserver } from "@vueuse/core";
import { FeatureState } from "@/interface/FeatureState";
const typingTargetDOM = ref(null);
const targetListenerDOM = ref<null | HTMLElement>(null);
const humanFix = ref<boolean>(false);
const homePageState = useHomePageState();

function callback() {
  const nowProgress = homePageState.feature.human.scrollPercentage;
  humanFix.value = nowProgress >= 99.9;
  if (homePageState.feature.more !== undefined && homePageState.feature.more.enter) humanFix.value = false;
  if (Object.entries(homePageState.feature).every(e => !(e[0] == 'human' ? false : (e[1] as FeatureState).enter))) humanFix.value = false;
}

onMounted(() => {
  homePageState.feature.human = homePageState.featureItemRegister();
  homePageState.feature.human.dom = targetListenerDOM.value;
  homePageState.feature.human.enter = true;
  const { stop } = useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        if (isIntersecting) {
          new Typewriter(typingTargetDOM.value, {
            loop: false,
          }).typeString('A simple yet powerful native javascript').start();
          stop();
        }
      }
  )
  homePageState.feature.human.callback = callback;

});
</script>

<template>
 <section id="let-me-show-you" ref="targetListenerDOM">
<!--   <div ref="typingTargetDOM" id="text" class="text-white text-zip-center text-bold-large mt-5"></div>-->

   <div id="feature-human" v-bind:class="{'position-fixed': humanFix}">
   </div>
 </section>
</template>

<style scoped lang="scss">
#let-me-show-you {
  position: relative;
  background-color: #333333;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  #feature-human {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 600px;
    height: 650px;
    transform: translate(-50%, -50%);
    z-index: 3;
    background-image: url("@/assets/images/feature/human.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    user-select: none;
    pointer-events: none;
    overflow: visible;
  }
}
</style>
