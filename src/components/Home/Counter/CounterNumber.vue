<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";

const counterRef = ref(null);
const count = ref(0);
const duration = 2000;

const props = defineProps({
  title: String,
  target: Number
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
      <span class="number">{{ count }}</span>
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
  }
  .number {
    font-size: 130px;
    font-weight: 500;
  }
}
</style>
