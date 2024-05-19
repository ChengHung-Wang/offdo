<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
const typingTargetDOM = ref(null);
onMounted(() => {
  let typewriter = new Typewriter(typingTargetDOM.value, {
    loop: false,
  });

  typewriter.typeString('A simple yet powerful native javascript').start();
});
</script>

<template>
 <section id="let-me-show-you">
   <div ref="typingTargetDOM" id="text" class="text-white text-zip-center text-bold-large mt-5"></div>
 </section>
</template>

<style scoped lang="scss">
#let-me-show-you {
  background-color: #333333;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}
</style>
