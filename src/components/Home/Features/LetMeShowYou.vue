<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
const typingTargetDOM = ref(null);
onMounted(() => {
  let typewriter = new Typewriter(typingTargetDOM.value, {
    loop: false,
    delay: 75,
  });

  typewriter
      .pauseFor(2500)
      .typeString('A simple yet powerful native javascript')
      .pauseFor(300)
      .deleteChars(10)
      .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
      .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
      .pauseFor(1000)
      .start();
  setTimeout(() => {
    typewriter.typeString('A simple yet powerful native javascript');
  }, 5000);
});
</script>

<template>
 <section id="let-me-show-you">
   <div ref="typingTargetDOM" id="text" class="text-white">

   </div>
 </section>
</template>

<style scoped lang="scss">

</style>
