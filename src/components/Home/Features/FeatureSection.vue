<script setup lang="ts">
import LetMeShowYou from "@/components/Home/Features/LetMeShowYou.vue";
import FeatureClothing from "@/components/Home/Features/FeatureClothing.vue";
import FeatureLocation from "@/components/Home/Features/FeatureLocation.vue";
import FeatureMethod from "@/components/Home/Features/FeatureMethod.vue";
import FeatureMore from "@/components/Home/Features/FeatureMore.vue";
import { ref } from "vue";
import SlideInTooltip from "@/components/Universal/SlideInTooltip/SlideInTooltip.vue";

const humanDisplayOffset = ref(100);
const toolTipOpen = ref(false);

// onMounted(() => {
//   humanDisplayOffset.value = window.screen.height / 2 - 250;
//   scrollListenerDOM.value.addEventListener('scroll', onScroll)
//   console.log(humanDisplayOffset.value);
// });
//
// onUnmounted(() => {
//   scrollListenerDOM.value.removeEventListener(onScroll)
// })
</script>

<template>
  <section id="feature">
    <div id="human-display">
      <div id="feature-human">
        <el-affix :offset="humanDisplayOffset" target="#human-display">
        <div class="img"></div>
        </el-affix>
      </div>
      <LetMeShowYou />
      <FeatureClothing />
      <FeatureLocation />
      <FeatureMethod />
    </div>
    <FeatureMore />

    <!--  for test  -->
    <SlideInTooltip
        title="Lorem ipsum dolor sit amet."
        message="Lorem ipsum dolor sit amet, <br>consectetur adipisicing elit. At, ipsa."
        :open="toolTipOpen" />
    <el-switch v-model="toolTipOpen" />
<!--    <el-button @click="toolTipToggle" type="primary">Primary</el-button>-->

  </section>
</template>

<style scoped lang="scss">
#feature {
  position: relative;
  #human-display {
    width: 100vw;
    overflow-x: hidden;
  }
  #feature-human {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 0;
    user-select: none;
    pointer-events: none;
    overflow: visible;
    .img {
      height: 500px;
      width: 190px;
      background-image: url("@/assets/images/feature/human.svg");
      background-position: center;
      background-size: contain;
    }
  }
}
</style>
