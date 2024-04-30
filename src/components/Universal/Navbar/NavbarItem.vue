<template>
  <li class="nav-item">
    <a class="nav-link active mx-4" aria-current="page" href="#">{{ props.text }}</a>
  </li>
</template>

<style scoped lang="scss">
.nav-link {
  font-size: 16px;
  font-weight: 600;
}
</style>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  text: String
})
</script>
