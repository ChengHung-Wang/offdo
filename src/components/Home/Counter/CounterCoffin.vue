<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import primaryCoffin from "@/assets/images/coffin/coffin-purple.svg";
import secondaryCoffin from "@/assets/images/coffin/coffin-yellowGreen.svg";

const props = defineProps({
  isPurple: Boolean,
  y: Number,
  x: Number,
  delay: Number
})

const image = props.isPurple ? primaryCoffin : secondaryCoffin;

const elementRef = ref(null);

// TODO: change to dynamic
const nowPosition = ref({
  x: props.x,
  y: 900
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        nowPosition.value.x = props.x;
        nowPosition.value.y = props.y;
      }, props.delay);
      observer.disconnect();
    }
  });
});

onMounted(() => {
  observer.observe(elementRef.value);
});
</script>

<template>
  <div ref="elementRef" class="counter-coffin-container">
    <transition name="drop-down">
      <img :src="image" v-bind:style="{bottom: nowPosition.y + 'px', left: `calc(50% + ${nowPosition.x}px)`}" alt="">
    </transition>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 203px;
  position: absolute;
  transform: translateX(-50%);
  transition: cubic-bezier(0.1, 0.4, 0.9, 1.2) .3s;
  bottom: 0;
  left: 0;
  z-index: 999;
}
</style>
