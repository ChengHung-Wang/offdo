<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import { ref } from "vue";

const modules = ref([EffectCoverflow]);

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

</script>

<template>
  <section id="feature-clothing">
    <!--    loop: true,
        slidesPerView : 2,
        centeredSlides : true,
        effect : 'coverflow',
        coverflow: {
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    // slideShadows : true
                },-->
    <swiper
        :slides-per-view="3"
        :space-between="200"
        :centered-slides="true"
        :loop="true"
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{rotate: 0, stretch: 1, depth: 300, modifier: 0.7, slideShadows: false}"
        class="swiper-container"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide c1">
        <img src="@/assets/images/feature/clothing/wedding-dress.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c2">
        <img src="@/assets/images/feature/clothing/clown.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c3">
        <img src="@/assets/images/feature/clothing/nude.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c4">
        <img src="@/assets/images/feature/clothing/plastic-bag.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c5">
        <img src="@/assets/images/feature/clothing/mummy.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c1">
        <img src="@/assets/images/feature/clothing/wedding-dress.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c2">
        <img src="@/assets/images/feature/clothing/clown.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c3">
        <img src="@/assets/images/feature/clothing/nude.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c4">
        <img src="@/assets/images/feature/clothing/plastic-bag.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c5">
        <img src="@/assets/images/feature/clothing/mummy.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c1">
        <img src="@/assets/images/feature/clothing/wedding-dress.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c2">
        <img src="@/assets/images/feature/clothing/clown.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c3">
        <img src="@/assets/images/feature/clothing/nude.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c4">
        <img src="@/assets/images/feature/clothing/plastic-bag.svg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide c5">
        <img src="@/assets/images/feature/clothing/mummy.svg" alt="">
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss">
#feature-clothing {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.swiper-container {
  width: 150vw;
  height: 600px;
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
