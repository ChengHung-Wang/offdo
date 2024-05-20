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
    image: require("@/assets/images/feature/method/chalk.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/method/milk-jug.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/method/rock.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/method/rubbish-trucks.svg")
  },
  {
    title: "",
    message: "",
    image: require("@/assets/images/feature/method/sea.svg")
  },
]

onMounted(() => {
  homePageState.feature.method = homePageState.featureItemRegister(
      targetListenerDOM, '', '', '', null);
  useIntersectionObserver(
      targetListenerDOM,
      ([{isIntersecting}]) => {
        homePageState.feature.method.enter = isIntersecting;
      }
  )
});
</script>

<template>
  <section id="feature-method" ref="targetListenerDOM">
    <h1>下葬方式</h1>

    <swiper
        :slides-per-view="3"
        :space-between="20"
        :centered-slides="true"
        :loop="true"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 1, depth: 500, modifier: 0.6, slideShadows: true}"
        class="swiper-container"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <template v-for="key in 10" :key="key">
        <swiper-slide v-for="(item, key) in slideData" :key="key" class="swiper-slide">
          <img :src="item.image" alt="">
        </swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
#feature-method {
  background-color: black;
  min-height: 100vh;
  position: relative;
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
  }
}
</style>
