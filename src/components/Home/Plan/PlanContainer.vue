<script setup lang="ts">
import SectionTitle from "@/components/Universal/Title/SectionTitle.vue";
import PlanItem from "@/components/Home/Plan/PlanItem.vue";
import { useHomePageData } from "@/store/home-page-data";

const homePageData = useHomePageData();
</script>

<template>
  <section id="plan">
    <div class="container">
      <SectionTitle title="選擇屬於你的計畫" />
      <div class="row">
        <PlanItem v-for="(value, key) in homePageData.plans" :key="key" :data="value" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  section#plan {
    margin-top: 110px;
  }
</style>
