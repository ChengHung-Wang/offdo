<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
import { useHomePageState } from "@/store/home-page-state";
import { now, useIntersectionObserver } from "@vueuse/core";
import { FeatureState } from "@/interface/FeatureState";

const targetListenerDOM = ref<null | HTMLElement>(null);
const humanFix = ref<boolean>(false);
const homePageState = useHomePageState();
const isVisable = ref<boolean>(true);

function callback() {
  const nowProgress = homePageState.feature.human.scrollPercentage;
  const feature = homePageState.feature;
  humanFix.value = nowProgress >= 100

  if (!feature.clothing?.enter && !feature.location?.enter && !feature.method?.enter &&  !feature.more?.enter) {
    humanFix.value = false;
  }

  if (feature.more?.scrollPercentage >= 100) {
    humanFix.value = false;
  }
  // if (homePageState.feature.more !== undefined && homePageState.feature.more.enter) humanFix.value = false;
  // console.log(Object.entries(homePageState.feature).every(e => !(e[0] == 'human' ? false : (e[1] as FeatureState).enter)),isVisable.value)
  // if (Object.entries(homePageState.feature).every(e => !(e[0] == 'human' ? false : (e[1] as FeatureState).enter))) {
  //   humanFix.value = false;
  // }
}

onMounted(() => {
  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        if (isIntersecting) {
          isVisable.value = isIntersecting;
          console.log(isIntersecting);
        }
      }
  )
  homePageState.feature.human = homePageState.featureItemRegister();
  homePageState.feature.human.dom = targetListenerDOM.value;
  homePageState.feature.human.enter = true;
  homePageState.feature.human.callback = callback;
});
</script>

<template>
  <section id="let-me-show-you" ref="targetListenerDOM">
    <h2 class="title text-white text-zip-center text-bold-large w-100">你以為你只能擁有無聊的葬禮？</h2>
    <h2 v-bind:class="{'bottom-text-mask': homePageState.feature.human?.scrollPercentage <= 30}"
        class="title text-white text-zip-center text-bold-large bg-primary-color bottom-text">
      Let me show you!
    </h2>
    <div v-if="homePageState.feature.human != undefined"
         id="feature-human"
         v-bind:class="{'position-fixed': humanFix, location: homePageState.featureHuman.location.display}"
         v-bind:style="{
         '--activeLocation': 'url(\'' + homePageState.featureHuman.location?.image + '\')'
        }">
      <img v-if="homePageState.featureHuman.clothing.display" :src="homePageState.featureHuman.clothing.image"
           class="clothing" alt="">
    </div>
  </section>
</template>

<style scoped lang="scss">
section#let-me-show-you {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-content: start;
  justify-content: center;
  margin-bottom: 400px;

  flex-wrap: wrap;
  padding-top: 120px;
  padding-bottom: 90px;

  .bottom-text {
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .bottom-text::after, .bottom-text::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 110%;
    background-color: black;
    transition: .5s ease-in-out;
  }

  .bottom-text::after {
    left: 100%;
  }

  .bottom-text::before {
    right: 100%;
  }

  .bottom-text-mask::after {
    left: 0 !important;
  }

  .bottom-text-mask::before {
    right: 0 !important;
  }

  #feature-human {
    position: absolute;
    left: calc(50% - 300px);
    top: calc(50% - 325px);
    width: 600px;
    height: 650px;
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
