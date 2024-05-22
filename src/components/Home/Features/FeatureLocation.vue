<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import { computed, onMounted, ref } from "vue";
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
const nowActive = ref<number>(2);
const titleAnimationHasRun = ref<boolean>(false);
const titleAnimationActionAble = ref<boolean>(true);
const animationFrameLock = ref<boolean>(false);

const onSlideChange = (e) => {
  homePageState.featureHuman.location.display = false;
  nowActive.value = e.activeIndex;
  setTimeout(() => {
    locationDisplay();
    if (slideData[e.activeIndex].image != undefined)
      homePageState.featureHuman.location.image = slideData[e.activeIndex].image;
  }, 350)
};

const slideData = (useHomePageData()).features.location;

function locationDisplay() {
  homePageState.featureHuman.location.display = homePageState.feature.location?.scrollPercentage >= 120;
}

function toggleToolTip() {
  const nowProgress: number = homePageState.feature.location.scrollPercentage;
  const preState: boolean = nowProgress >= homePageState.tooltipToggleBound.open && nowProgress <= homePageState.tooltipToggleBound.close;
  if (toolTipOpen.value != preState) toolTipOpen.value = preState;
}

function typingEffect(effect) {
  const nowProgress: number = homePageState.feature.location.scrollPercentage;
  if (nowProgress > homePageState.typewriterEffectConfig.typing &&
      nowProgress <= homePageState.typewriterEffectConfig.delete &&
      titleAnimationActionAble.value) {
    if (!titleAnimationHasRun.value) {
      titleAnimationHasRun.value = true;
      titleAnimationActionAble.value = false;
      effect.typeString(homePageState.feature.location.title).callFunction(() => {
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

const offsetTop = computed(() => {
  const nowProgress: number = homePageState.feature.location.scrollPercentage;
  // if (nowProgress <= 120) return -200;
  if (nowProgress < 120) {
    return `calc(${Math.round(homePageState.feature.location.scrollPercentage)}% - 50.1% - 325px)`;
  }
  return 'calc(70% - 325px)';
})


onMounted(() => {

  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        homePageState.feature.location.enter = isIntersecting;
      }
  )
  const typewriter = new Typewriter(typingTargetDOM.value, {
    loop: false,
    delay: homePageState.typewriterEffectConfig.delay,
  });
  // register
  homePageState.feature.location = homePageState.featureItemRegister(targetListenerDOM, "選擇你喜歡的告別式場地", () => {
    if (!animationFrameLock.value) {
      window.requestAnimationFrame(function() {
        toggleToolTip();
        locationDisplay();
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
  <section id="feature-location" ref="targetListenerDOM">
    <div v-bind:class="{'opacity-100': homePageState.feature.location?.scrollPercentage > homePageState.typewriterEffectConfig.typing}"
         ref="typingTargetDOM" id="text" class="title text-white text-zip-center text-bold-large mt-5 w-100"></div>
    <swiper
        v-if="homePageState.feature.location != undefined"
        slides-per-view="auto"
        :space-between="100"
        :centered-slides="true"
        :auto-height="true"
        :initial-slide="nowActive"
        slide-class="swiper-slide"
        :loop="false"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 1, depth: 500, modifier: 0.75, slideShadows: false}"
        class="swiper-container"
        @slideChange="onSlideChange"
        v-bind:class="{'swiper-container-fixed': homePageState.feature.location.scrollPercentage < 150 && homePageState.feature.location.scrollPercentage >= 120}"
        v-bind:style="{'top': offsetTop}">
      <template v-for="key in 1" :key="key">
        <swiper-slide v-bind:class="{'swiper-slide-pre-fade-out': (homePageState.feature.location.scrollPercentage) >= 120}" v-for="(item, key) in slideData" :key="key">
          <img :src="item.image" alt="">
        </swiper-slide>
      </template>
    </swiper>
    <SlideInTooltip
        style="z-index: 4"
        :title="slideData[nowActive].title"
        :message="slideData[nowActive].message"
        :open="toolTipOpen"/>
  </section>
</template>

<style lang="scss" scoped>
#feature-location {
  height: 100vh;
  width: 100vw;
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: visible;
  background: gray;
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
  top: calc(70% - 325px);
  will-change: transform;
}
.swiper-slide {
  width: 600px!important;
  height: 650px;
  display: flex;
  justify-content: center;
  align-content: center;
  img {
    user-select: none;
    width: 600px;
    height: 650px;
  }
}
.swiper-container-fixed {
  position: fixed;
  left: 50%!important;
  top: 50%!important;
  transform: translate(-50%, -50%);
}

.swiper-slide-pre-fade-out + .swiper-slide-active {
  opacity: 0;
}

</style>
