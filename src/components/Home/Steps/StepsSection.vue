<script setup lang="ts">
import SectionTitle from "@/components/Universal/Title/SectionTitle.vue";
import StepsBar from "@/components/Home/Steps/StepsBar.vue";
import StepCards from "@/components/Home/Steps/StepCards.vue";
import { useHomePageState } from "@/store/home-page-state";
import { useHomePageData } from "@/store/home-page-data";

const homePageState = useHomePageState();
const homePageData = useHomePageData();

</script>

<template>
  <section id="steps">
    <div class="container">
      <SectionTitle title="你的計劃如何被實現?" />
      <StepsBar />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-white text-regular mb-5">
          <p class="text-white p-0 m-0 text-regular" v-for="(value, key) in homePageData.steps[homePageState.steps.nowIndex]" :key="key">
            {{ value }}
          </p>
        </div>
      </div>
    </div>
    <StepCards />
  </section>
</template>

<style scoped lang="scss">
  #steps {
    background-color: black;
    margin-top: 67px;
    overflow: hidden;
    max-width: 100vw;
  }
</style>
