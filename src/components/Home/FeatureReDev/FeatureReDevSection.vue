<script setup lang="ts">

import FeatureMethod from "@/components/Home/FeatureReDev/FeatureMethod.vue";
import FeatureMore from "@/components/Home/FeatureReDev/FeatureMore.vue";
import FeatureLocation from "@/components/Home/FeatureReDev/FeatureLocation.vue";
import LetMeShowYou from "@/components/Home/FeatureReDev/LetMeShowYou.vue";
import FeatureClothing from "@/components/Home/FeatureReDev/FeatureClothing.vue";
</script>

<template>
  <section id="feature">
    <LetMeShowYou />
    <FeatureClothing />
    <FeatureLocation />
    <FeatureMethod />
    <FeatureMore />
  </section>
</template>

<style scoped lang="scss">
  section[id^="feature"] {
    min-height: 100vh;
    max-width: 100vw;

  }
</style>
