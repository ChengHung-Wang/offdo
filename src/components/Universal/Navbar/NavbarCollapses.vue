<template>
  <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + props.idName"
          :aria-controls="props.idName"
          aria-expanded="false"
          aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<style scoped lang="scss">

</style>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  idName: String
})
</script>
