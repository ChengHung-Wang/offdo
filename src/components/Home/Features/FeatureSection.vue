<script setup lang="ts">
import LetMeShowYou from "@/components/Home/Features/LetMeShowYou.vue";
import FeatureClothing from "@/components/Home/Features/FeatureClothing.vue";
import FeatureLocation from "@/components/Home/Features/FeatureLocation.vue";
import FeatureMethod from "@/components/Home/Features/FeatureMethod.vue";
import FeatureMore from "@/components/Home/Features/FeatureMore.vue";
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useHomePageState } from "@/store/home-page-state";
import FeatureResearch from "@/components/Home/Features/FeatureResearch.vue";
import FeatureDev from "@/components/Home/Features/FeatureDev.vue";

const targetListenerDOM = ref<null | HTMLElement>(null);
const homePageState = useHomePageState();


function callback() {
  const nowProgress = homePageState.feature.human.scrollPercentage;
  console.log(nowProgress);
}

onMounted(() => {
  //
});
</script>

<template>
  <section id="feature">
    <LetMeShowYou />
    <FeatureClothing />
    <FeatureLocation />
    <FeatureMethod />
    <FeatureMore />

<!--    &lt;!&ndash;  for test  &ndash;&gt;-->
<!--    <SlideInTooltip-->
<!--        title="Lorem ipsum dolor sit amet."-->
<!--        message="Lorem ipsum dolor sit amet, <br>consectetur adipisicing elit. At, ipsa."-->
<!--        :open="toolTipOpen" />-->
<!--    <el-switch v-model="toolTipOpen" />-->
<!--&lt;!&ndash;    <el-button @click="toolTipToggle" type="primary">Primary</el-button>&ndash;&gt;-->

  </section>
</template>

<style scoped lang="scss">
#feature {
  position: relative;
  overflow: hidden;
}
</style>
