<template>
  <li class="nav-item">
    <a class="nav-link active mx-2" aria-current="page" href="#">{{ props.text }}</a>
  </li>
</template>

<style scoped lang="scss">

</style>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  text: String
})
</script>
