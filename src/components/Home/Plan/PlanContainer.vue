<script setup lang="ts">

import SectionTitle from "@/components/Universal/Title/SectionTitle.vue";
import PlanItem from "@/components/Home/Plan/PlanItem.vue";
</script>

<template>
  <section id="plan">
    <div class="container">
      <SectionTitle title="選擇屬於你的計畫" />
      <div class="row">
        <PlanItem />
        <PlanItem />
        <PlanItem />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  section#plan {
    margin-top: 110px;
  }
</style>
