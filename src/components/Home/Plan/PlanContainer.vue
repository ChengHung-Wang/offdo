<script setup lang="ts">
import SectionTitle from "@/components/Universal/Title/SectionTitle.vue";
import PlanItem from "@/components/Home/Plan/PlanItem.vue";
import { useHomePageData } from "@/store/home-page-data";

const homePageData = useHomePageData();
</script>

<template>
  <section id="plan">
    <div class="container">
      <SectionTitle title="選擇屬於你的計劃" />
      <div class="row">
        <PlanItem v-for="(value, key) in homePageData.plans" :key="key" :data="value" />
      </div>
      <div class="row">
        <div class="col-12" style="margin-top: 48px; color: white;">
          選定方案後即刻進入選擇服務流程，進入流程後由專門人員資訊細節、價格估算。
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  section#plan {
    margin-top: 110px;
    width: 100vw;
    overflow-x: hidden;
  }
</style>
