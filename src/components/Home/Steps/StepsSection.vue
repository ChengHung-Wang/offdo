<script setup lang="ts">
import SectionTitle from "@/components/Universal/Title/SectionTitle.vue";
import StepsBar from "@/components/Home/Steps/StepsBar.vue";
import StepCards from "@/components/Home/Steps/StepCards.vue";
</script>

<template>
  <section id="steps">
    <div class="container">
      <SectionTitle title="你的計畫如何被實現?" />
      <StepsBar />
    </div>
    .cont
    <div class="container">
      <div class="row">
        <div class="col-12 text-white text-regular-sm mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at magni minima nobis pariatur sed. Aut cum cupiditate deleniti distinctio inventore laudantium mollitia ratione sit, tenetur vitae. Eaque?
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

  }
</style>
