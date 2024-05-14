<script setup lang="ts">
// eslint-disable-next-line no-undef
import SectionSubTitle from "@/components/Universal/Title/SectionSubTitle.vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  title: String,
  subtitle: String
})
</script>

<template>
  <div class="row">
    <div class="col-12 title-container d-flex justify-content-center flex-wrap">
      <h2 class="title m-0">{{ props.title }}</h2>
    </div>
    <SectionSubTitle :text="props.subtitle" v-if="props.subtitle" />
  </div>
</template>

<style scoped lang="scss">
  .row {
    margin-bottom: 50px;
  }
  .title-container {
    height: 36px;
  }
  .title {
    transform: scaleX(125%);
    color: white;
    height: 36px;
  }
</style>
