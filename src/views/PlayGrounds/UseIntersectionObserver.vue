<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Vue, setup } from "vue-class-component";

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting
    },
)

export default class UseIntersectionObserver extends Vue {}

</script>
<script lang="ts">
</script>

<template>
<div id="main">

</div>
</template>

<style scoped lang="scss">

</style>
