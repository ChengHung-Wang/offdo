<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  text: String,
  action: Object
})
</script>

<template>
  <h4 class="footer-header">
    <span>{{ props.text }}</span>
  </h4>
</template>

<style scoped lang="scss">
span {
  transform: scaleX(125%);
  width: 0;
}
</style>
