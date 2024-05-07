<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  text: String,
  action: Object
})
</script>

<template>
  <router-link class="footer-item text-regular" to="">{{ props.text }}</router-link>
</template>

<style scoped lang="scss">

</style>
