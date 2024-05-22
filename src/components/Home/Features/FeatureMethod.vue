<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import { onMounted, ref } from "vue";
import { useHomePageState } from "@/store/home-page-state";
import { useIntersectionObserver } from "@vueuse/core";
import { useHomePageData } from "@/store/home-page-data";
import SlideInTooltip from "@/components/Universal/SlideInTooltip/SlideInTooltip.vue";
import Typewriter from 'typewriter-effect/dist/core';

const homePageState = useHomePageState();
const targetListenerDOM = ref<null | HTMLElement>(null);
const typingTargetDOM = ref<null | HTMLElement>(null);
const modules = ref([EffectCoverflow]);
const toolTipOpen = ref<boolean>(false);
const nowActive = ref<number>(0);
const titleAnimationHasRun = ref<boolean>(false);
const titleAnimationActionAble = ref<boolean>(true);
const animationFrameLock = ref<boolean>(false);

const onSlideChange = (e) => {
  homePageState.featureHuman.method.display = false;
  nowActive.value = e.activeIndex;
  setTimeout(() => {
    methodDisplay();
    if (slideData[e.activeIndex].image != undefined)
      homePageState.featureHuman.method.image = slideData[e.activeIndex].image;
  }, 350)
};

const slideData = (useHomePageData()).features.method;

function methodDisplay() {
  homePageState.featureHuman.method.display = homePageState.feature.method?.scrollPercentage >= 120;
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
  homePageState.feature.method = homePageState.featureItemRegister(targetListenerDOM, "選擇下葬方式", () => {
    if (!animationFrameLock.value) {
      window.requestAnimationFrame(function() {
        toggleToolTip();
        methodDisplay();
        toggleToolTip();
        typingEffect(typewriter);
        animationFrameLock.value = false;
      });
      animationFrameLock.value = true;
    }
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
        :space-between="-400"
        :centered-slides="true"
        :auto-height="true"
        :initial-slide="nowActive"
        slide-class="swiper-slide"
        :loop="false"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 10, depth: 2000, modifier: 0.5, slideShadows: false}"
        class="swiper-container"
        @slideChange="onSlideChange"
        v-bind:class="{'swiper-container-fixed': homePageState.feature.method.scrollPercentage < 120 && homePageState.feature.method.scrollPercentage >= 50}"
        v-bind:style="{'top': (homePageState.feature.method.scrollPercentage) < 120 ? 'calc(' + Math.round(homePageState.feature.method.scrollPercentage) + '% - 50.1% - 325px)' : 'calc(70% - 325px)'}">
      <template v-for="key in 1" :key="key">
        <swiper-slide v-for="(item, key) in slideData" :key="key">
          <img :src="item.image" alt="">
        </swiper-slide>
      </template>
    </swiper>
    <SlideInTooltip
        style="z-index: 6"
        :title="slideData[nowActive].title"
        :message="slideData[nowActive].message"
        :open="toolTipOpen"/>
  </section>
</template>

<style lang="scss" scoped>
#feature-method {
  height: 100vh;
  width: 100vw;
  position: relative;
  max-width: 100vw;
  z-index: 5;
  overflow-x: hidden;
  overflow-y: hidden;
  .title {
    transition: .2s ease-in-out;
    opacity: 0;
  }
}
.swiper-container {
  width: 100vw;
  height: 650px;
  overflow: visible;
  position: absolute;
  will-change: transform;
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
.swiper-container-fixed {
  position: fixed;
  left: 50%!important;
  top: 50%!important;
  transform: translate(-50%, -50%);
}
</style>
