<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import { onMounted, ref } from "vue";
import { useHomePageState } from "@/store/home-page-state";
import { useIntersectionObserver } from "@vueuse/core";

const homePageState = useHomePageState();
const targetListenerDOM = ref<null | HTMLElement>(null);
const modules = ref([EffectCoverflow]);
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const slideData = [
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/clothing/wedding-dress.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/clothing/clown.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/clothing/nude.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/clothing/plastic-bag.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/clothing/mummy.svg")
  },
]

onMounted(() => {
  homePageState.feature.clothing = homePageState.featureItemRegister(
      targetListenerDOM, '', '', '', null);
  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        homePageState.feature.clothing.enter = isIntersecting;
      }
  )
});
</script>

<template>
  <section id="feature-clothing" ref="targetListenerDOM">
    <h1 v-if="homePageState.feature.clothing !== undefined" class="text-white">{{ homePageState.feature.clothing.position.y }}</h1>
    <swiper
        :slides-per-view="3"
        :space-between="-200"
        :centered-slides="true"
        :auto-height="true"
        slide-class="swiper-slide"
        :loop="false"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 1, depth: 500, modifier: 0.75, slideShadows: false}"
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
  </section>
</template>

<style lang="scss">
#feature-clothing {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 4;
  max-width: 100vw;
  overflow-x: hidden;
}

.swiper-container {
  width: 100vw;
  height: 650px;
  overflow: visible;
}

.swiper-slide {
  padding: 12px;
  width: 600px!important;
  height: 650px;
  //box-shadow: 0 0 100px 200px rgba(0, 0, 0, .4);
  img {
    user-select: none;
    width: 600px;
    height: 650px;
  }
}

</style>
