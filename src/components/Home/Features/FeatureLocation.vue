<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useHomePageState } from "@/store/home-page-state";
import { useIntersectionObserver } from "@vueuse/core";

import SlideInTooltip from "@/components/Universal/SlideInTooltip/SlideInTooltip.vue";
import Typewriter from 'typewriter-effect/dist/core';
import type { FeatureState } from "@/interface/FeatureState";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css';

const toolTipOpen = ref<boolean>(false);
const targetListenerDOM = ref<null | HTMLElement>(null);
const typingTargetDOM = ref<null | HTMLElement>(null);
const homePageState = useHomePageState();
const thisFeature: FeatureState = homePageState.featureItemRegister();


// for Swiper
const modules = ref([EffectCoverflow]);
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const swiperInstance = ref()
const slideData = [
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/location/cliff.png")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/location/nightclub.png")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/location/playground.png")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/location/universe.png")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/location/waste-dump.png")
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let nowTypingIndex = 0;
let lastTypingProgress = 0
let isScrollingDown = true; // 初始為向下滾動


thisFeature.title = "選擇你喜歡的告別式場地"

function toggleToolTip() {
  const nowProgress: number = homePageState.feature.location.scrollPercentage;
  const preState: boolean = nowProgress >= homePageState.tooltipToggleBound.open && nowProgress <= homePageState.tooltipToggleBound.close;
  if (toolTipOpen.value != preState) toolTipOpen.value = preState;
}

function typingEffect(effect) {
  const nowProgress: number = homePageState.feature.location.scrollPercentage;
  // if (nowProgress >= homePageState.typewriterEffectConfig.typing &&
  //     nowProgress <= homePageState.typewriterEffectConfig.delete &&
  //     Math.abs(nowProgress - lastTypingProgress) >= homePageState.typewriterEffectConfig.step) {
  //   lastTypingProgress = nowProgress;
  //   // 向上滾
  //   if (nowProgress < 0 && nowTypingIndex > 0) {
  //     nowTypingIndex --;
  //     effect.deleteChars(1).start();
  //   }else if (nowProgress)
  // }



  // console.log(['nowProgress >= homePageState.typewriterEffectConfig.typing', nowProgress >= homePageState.typewriterEffectConfig.typing],
  //     ['nowProgress <= homePageState.typewriterEffectConfig.delete', nowProgress <= homePageState.typewriterEffectConfig.delete],
  //     ['nowProgress - lastTypingProgress >= homePageState.typewriterEffectConfig.step', nowProgress - lastTypingProgress >= homePageState.typewriterEffectConfig.step],
  //     ['nowTypingIndex < thisFeature.title.length', nowTypingIndex < thisFeature.title.length], nowTypingIndex, thisFeature.title.length);
  if (nowProgress >= homePageState.typewriterEffectConfig.typing &&
      nowProgress <= homePageState.typewriterEffectConfig.delete &&
      Math.abs(nowProgress - lastTypingProgress) >= homePageState.typewriterEffectConfig.step) {
    if (isScrollingDown && nowTypingIndex < thisFeature.title.length) {
      // console.log(thisFeature.title[nowTypingIndex]);
      effect.typeString(thisFeature.title[nowTypingIndex]).start();
      nowTypingIndex++;
    } else if (!isScrollingDown && nowTypingIndex > 0) {
      effect.deleteChars(1).start();
      nowTypingIndex--;
    }
    lastTypingProgress = nowProgress;
  }

  if (nowProgress >= homePageState.typewriterEffectConfig.delete &&
      Math.abs(nowProgress - lastTypingProgress) >= homePageState.typewriterEffectConfig.step) {
    isScrollingDown = false; // 開始向上滾動
  } else {
    isScrollingDown = true; // 開始向下滾動
  }

  // close
}

onMounted(() => {
  thisFeature.dom = targetListenerDOM.value;
  console.log(swiperInstance);
  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        homePageState.feature.location.enter = isIntersecting;
      }
  )

  const typewriter = new Typewriter(typingTargetDOM.value, {
    loop: false,
    delay: 75,
  });
  // register
  thisFeature.callback = () => {
    toggleToolTip();
    typingEffect(typewriter);
  };

  homePageState.feature.location = thisFeature;
});

</script>

<template>
  <section id="feature-location" ref="targetListenerDOM">
    <div ref="typingTargetDOM" id="text" class="text-white text-zip-center text-bold-large mt-5 w-100"></div>
    <swiper
        :slides-per-view="3"
        slide-class="swiper-slide"
        :loop="false"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 0, depth: 500, modifier: 1, slideShadows: true}"
        class="swiper-container"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <template v-for="key in 10" :key="key">
        <swiper-slide v-for="(item, key) in slideData" :key="key">
          <img :src="item.image" alt="">
        </swiper-slide>
      </template>
    </swiper>

    <SlideInTooltip
        title="你知道嗎"
        message="沒有人愛你"
        :open="toolTipOpen"/>
  </section>
</template>

<style scoped lang="scss">
#feature-location {
  position: relative;
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.swiper-container {
  width: 100vw;
  height: 600px;
  top: 0;
  position: absolute;
}

.swiper-slide {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  font-size: 2rem;
  font-family: monospace;
  letter-spacing: 0.08rem;
  padding: 12px;
  //box-shadow: 0 0 100px 200px rgba(0, 0, 0, .4);
  img {
    user-select: none;
    position: relative;
    width: 100%;
    object-fit: contain;
  }
}
</style>
