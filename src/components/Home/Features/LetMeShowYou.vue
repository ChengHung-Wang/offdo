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
  if (Object.entries(homePageState.feature).every(e => !(e[0] == 'human' ? false : (e[1] as FeatureState).enter))) {
    humanFix.value = false;
  }
}

onMounted(() => {
  homePageState.feature.human = homePageState.featureItemRegister();
  homePageState.feature.human.dom = targetListenerDOM.value;
  homePageState.feature.human.enter = true;
  const {stop} = useIntersectionObserver(
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
    <div v-if="homePageState.feature.human != undefined"
         id="feature-human"
         v-bind:class="{'position-fixed': humanFix, location: homePageState.featureHuman.location.display}"
         v-bind:style="{
         top: humanFix && homePageState.feature.human.scrollPercentage >= 102 ? '50%' : 'calc(' + homePageState.feature.human.scrollPercentage + '% - 50%)',
         '--activeLocation': 'url(\'' + homePageState.featureHuman.location.image + '\')'
        }">
      <img v-if="homePageState.featureHuman.clothing.display" :src="homePageState.featureHuman.clothing.image"
           class="clothing" alt="">
    </div>
  </section>
</template>

<style scoped lang="scss">
#let-me-show-you {
  position: relative;
  background-color: black;
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
    will-change: transform;

    img {
      width: 600px;
      height: 650px;
    }
  }

  #feature-human::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("@/assets/images/feature/human.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .location::before {
    content: "";
    background-image: var(--activeLocation);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
}
</style>
