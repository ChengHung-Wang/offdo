<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useHomePageState } from "@/store/home-page-state";
import { useIntersectionObserver } from "@vueuse/core";
import SlideInTooltip from "@/components/Universal/SlideInTooltip/SlideInTooltip.vue";
import Typewriter from 'typewriter-effect/dist/core';
import type FeatureState from "@/interface/FeatureState";

const toolTipOpen = ref<boolean>(false);
const targetListenerDOM = ref<null | HTMLElement>(null);
const typingTargetDOM = ref<null | HTMLElement>(null);
const homePageState = useHomePageState();
const thisFeature: FeatureState = homePageState.featureItemConstructor;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typewriter = ref(null);
let nowTypingIndex = 0;
let lastTypingProgress = 0
let isScrollingDown = true; // 初始為向下滾動

thisFeature.title = "選擇你喜歡的告別式場地";


function callback(): void {
  toggleToolTip();
  typingEffect();
}

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



  console.log(['nowProgress >= homePageState.typewriterEffectConfig.typing', nowProgress >= homePageState.typewriterEffectConfig.typing],
      ['nowProgress <= homePageState.typewriterEffectConfig.delete', nowProgress <= homePageState.typewriterEffectConfig.delete],
      ['nowProgress - lastTypingProgress >= homePageState.typewriterEffectConfig.step', nowProgress - lastTypingProgress >= homePageState.typewriterEffectConfig.step],
      ['nowTypingIndex < thisFeature.title.length', nowTypingIndex < thisFeature.title.length], nowTypingIndex, thisFeature.title.length);
  if (nowProgress >= homePageState.typewriterEffectConfig.typing &&
      nowProgress <= homePageState.typewriterEffectConfig.delete &&
      Math.abs(nowProgress - lastTypingProgress) >= homePageState.typewriterEffectConfig.step) {
    if (isScrollingDown && nowTypingIndex < thisFeature.title.length) {
      console.log(thisFeature.title[nowTypingIndex]);
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
  console.log(typewriter);
  thisFeature.callback = () => {
    toggleToolTip();
    typingEffect(typewriter);
  };

  homePageState.feature.location = thisFeature;
});

</script>

<template>
  <section id="feature-location" ref="targetListenerDOM">
    <h1 v-if="homePageState.feature.location != undefined" class="w-100">
      {{ homePageState.feature.location.scrollPercentage }}
    </h1>
    <div ref="typingTargetDOM" id="text" class="text-white text-zip-center text-bold-large mt-5 w-100"></div>
    <h1 v-if="homePageState.feature.location != undefined">
      {{ homePageState.feature.location.scrollPercentage }}
    </h1>

    <SlideInTooltip
        title="你知道嗎"
        message="沒有人愛你"
        :open="toolTipOpen"/>
  </section>
</template>

<style scoped lang="scss">
#feature-location {
  background-color: #79797c;
  min-height: 100vh;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
</style>
