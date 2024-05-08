<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  text: String,
})
</script>

<template>
  <div class="col-12">
    <p class="description text-white">{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.description {
  color: white;
  margin-top: 40px;
  font-weight: bold;
  margin-bottom: 0;
}
</style>
