<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules'
import { useHomePageState } from "@/store/home-page-state";
import { onMounted, ref } from "vue";
import { useHomePageData } from "@/store/home-page-data";
import { useIntersectionObserver } from "@vueuse/core";
import SlideInTooltip from "@/components/Universal/SlideInTooltip/SlideInTooltip.vue";
import Typewriter from 'typewriter-effect/dist/core';
import 'swiper/css';

const homePageState = useHomePageState();
const targetListenerDOM = ref<null | HTMLElement>(null);
const typingTargetDOM = ref<null | HTMLElement>(null);
const modules = ref([EffectCoverflow]);
const toolTipOpen = ref<boolean>(false);
const nowActive = ref<number>(2);
const titleAnimationHasRun = ref<boolean>(false);
const titleAnimationActionAble = ref<boolean>(true);


const onSlideChange = (e) => {
  homePageState.featureHuman.method.display = false;
  nowActive.value = e.activeIndex % 5;
  setTimeout(() => {
    methodDisplay();
    if (slideData[e.activeIndex] != undefined)
      homePageState.featureHuman.method.image = slideData[e.activeIndex].image;
  }, 350)
};

const slideData = (useHomePageData()).features.method;

function methodDisplay() {
  homePageState.featureHuman.method.display = homePageState.feature.method?.scrollPercentage >= 110;
}

function toggleToolTip() {
  const nowProgress: number = homePageState.feature.method.scrollPercentage;
  const preState: boolean = nowProgress >= homePageState.tooltipToggleBound.open && nowProgress <= homePageState.tooltipToggleBound.close;
  if (toolTipOpen.value != preState) toolTipOpen.value = preState;
}

function typingEffect(effect) {
  const nowProgress: number = homePageState.feature.method.scrollPercentage;
  if (nowProgress > homePageState.typewriterEffectConfig.typing &&
      nowProgress <= homePageState.typewriterEffectConfig.delete &&
      titleAnimationActionAble.value) {
    if (!titleAnimationHasRun.value) {
      titleAnimationHasRun.value = true;
      titleAnimationActionAble.value = false;
      effect.typeString(homePageState.feature.method.title).callFunction(() => {
        titleAnimationActionAble.value = true;
      }).start();
    } else if (
        (nowProgress >= homePageState.typewriterEffectConfig.delete || nowProgress <= homePageState.typewriterEffectConfig.typing) &&
        titleAnimationHasRun.value &&
        titleAnimationActionAble.value) {
      titleAnimationActionAble.value = false;
      effect.deleteAll().callFunction(() => {
        titleAnimationHasRun.value = false;
        titleAnimationActionAble.value = true;
      }).start();
    }
  } else if (
      (nowProgress >= homePageState.typewriterEffectConfig.delete || nowProgress <= homePageState.typewriterEffectConfig.typing) &&
      titleAnimationHasRun.value &&
      titleAnimationActionAble.value) {
    titleAnimationActionAble.value = false;
    effect.deleteAll().callFunction(() => {
      titleAnimationHasRun.value = false;
      titleAnimationActionAble.value = true;
    }).start();
  }
}

onMounted(() => {
  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        homePageState.feature.method.enter = isIntersecting;
      }
  )
  const typewriter = new Typewriter(typingTargetDOM.value, {
    loop: false,
    delay: homePageState.typewriterEffectConfig.delay,
  });
  // register
  homePageState.feature.method = homePageState.featureItemRegister(targetListenerDOM, "選擇你喜歡的下葬方式", () => {
    toggleToolTip();
    methodDisplay();
    toggleToolTip();
    typingEffect(typewriter);
  });

})

</script>

<template>
  <section id="feature-method" ref="targetListenerDOM">
    <div v-bind:class="{'opacity-100': homePageState.feature.method?.scrollPercentage > homePageState.typewriterEffectConfig.typing}"
         ref="typingTargetDOM" id="text" class="title text-white text-zip-center text-bold-large mt-5 w-100"></div>

    <swiper
        v-if="homePageState.feature.method != undefined"
        slides-per-view="auto"
        :space-between="-500"
        :centered-slides="true"
        :auto-height="true"
        :initial-slide="nowActive * 2"
        slide-active-class="swiper-slide-active"
        slide-class="swiper-slide"
        :loop="false"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 1, depth: 1500, modifier: 0.75, slideShadows: false}"
        class="swiper-container"
        @slideChange="onSlideChange">
      <template v-for="index in 10" :key="index">
        <swiper-slide v-for="(item, key) in slideData" :key="key">
          <img :src="item.image" alt="">
        </swiper-slide>
      </template>
    </swiper>

    <SlideInTooltip
        :title="slideData[nowActive].title"
        :message="slideData[nowActive].message"
        :open="toolTipOpen"/>
  </section>
</template>

<style scoped lang="scss">
section#feature-method {
  background-color: black;
  position: relative;
  overflow: visible;
  max-width: 100vw;
  .title {
    max-width: calc(100vw - 25%);
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%) scaleX(125%);
    overflow: hidden;
  }
}
.swiper-container {
  width: 100vw;
  max-width: 100vw;
  height: 650px;
  overflow: hidden;
  position: sticky;
  top: calc(50% - 325px);
  z-index: 4;
}

.swiper-slide {
  width: 1200px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-content: center;
  img {
    user-select: none;
    width: 100%;
  }
}

.swiper-pre-fade-out {
  bottom: 0!important;
  top: unset!important;
}

.swiper-slide-pre-fade-out + .swiper-slide-active {
  opacity: 0;
}
</style>
