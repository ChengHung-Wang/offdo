<script setup lang="ts">
import SlideInTooltip from "@/components/Universal/SlideInTooltip/SlideInTooltip.vue";
import Typewriter from 'typewriter-effect/dist/core';
import { onMounted, ref } from "vue";
import { useHomePageData } from "@/store/home-page-data";
import { useHomePageState } from "@/store/home-page-state";

const nowActive = ref(0);
const toolTipOpen = ref(false);
const homePageData = useHomePageData();

const typingTargetDOM = ref<HTMLElement | null>(null);
const typewriter = ref(null);
const typeText = ref("");

onMounted(() =>{
  typewriter.value = new Typewriter(typingTargetDOM.value, {
    loop: false,
    delay: (useHomePageState()).typewriterEffectConfig.delay,
  });
})

</script>

<template>
  <section id="dev" class="full-screen">
    <SlideInTooltip
        v-if="homePageData.features.dev[nowActive].title != undefined"
        :title="homePageData.features.dev[nowActive].title"
        :message="homePageData.features.dev[nowActive].message"
        :open="toolTipOpen"/>

    <div ref="typingTargetDOM" id="text" class="title text-white text-zip-center text-bold-large mt-5 w-100"></div>
    <br><br><br>

    <select name="" v-model="nowActive" id="">
      <option v-for="(item, key) in homePageData.features.dev" :key="key" :value="key">{{ item.title }}</option>
    </select>
    <el-switch v-model="toolTipOpen" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex">
            <el-input v-model="typeText" class="me-3" />
            <el-button @click="typewriter.deleteAll().typeString(typeText).start()">play</el-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#dev {
  background-color: black;
}
</style>
