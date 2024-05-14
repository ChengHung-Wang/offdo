<script setup lang="ts">

import CounterCoffin from "@/components/Home/Counter/CounterCoffin.vue";

const CoffinPosition = [
  {x: 0, y: 0}, {x: 26, y: 43}, {x: 15, y: 88}, {x: -22, y: 132}, {x: 9, y: 176}, {x: 0, y: 220}, {x: -22, y: 264},
  {x: 9, y: 308}, {x: 25, y: 352}, {x: -6, y: 396}, {x: 10, y: 441}
];
</script>

<template>
  <div class="counter-animation">
    <CounterCoffin
        v-for="(position, index) in CoffinPosition" :key="index"
        :x="position.x" :y="position.y" :delay="index * 300" :is-purple="index % 2 != 0"/>
  </div>
</template>

<style scoped lang="scss">
.counter-animation {
  position: relative;
  height: 750px;
  width: 100%;
  overflow: visible;
}
</style>
