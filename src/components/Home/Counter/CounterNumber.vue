<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";

const counterRef = ref(null);
const count = ref(0);
const duration = 2000;

const props = defineProps({
  title: String,
  target: Number,
  prefix: String
})

const startCounterAnimation = () => {
  let start = 0;
  const step = () => {
    const now = Date.now();
    const progress = Math.min((now - start) / duration, 1);
    count.value = Math.floor(progress * props.target);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      count.value = props.target;
    }
  };
  window.requestAnimationFrame(() => {
    start = Date.now();
    step();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounterAnimation();
      observer.disconnect();
    }
  });
});

onMounted(() => {
  observer.observe(counterRef.value);
});

</script>

<template>
  <div ref="counterRef" class="counter">
    <h3 class="title">
      {{ props.title }}
    </h3>
    <transition name="count">
      <span class="number" v-bind:style="{'--prefix': '\'' + props.prefix + '\''}">{{ count }}</span>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.counter {
  height: 100%;
  display: flex;
  align-items: end;
  align-content: end;
  flex-wrap: wrap;
  .title {
    color: white;
    width: 100%;
    transform: scaleX(125%);
    transform-origin: left;
    text-align: left;
    font-size: 36px;
  }
  .number {
    font-size: 130px;
    font-weight: 500;
    position: relative;
    line-height: 130px;
  }
  .number::after {
    content: var(--prefix);
    position: absolute;
    font-size: 36px;
    bottom: -40px;
    right: -72px;
    color: white;
    transform: scaleX(125%);
    transform-origin: center;
    text-align: center;
  }
}
</style>
