<script setup lang="ts">
import { onMounted, ref } from "vue";

const video = ref<null | HTMLVideoElement>(null);

onMounted(() => {
  setTimeout(() => {
    const controlObj = video.value as HTMLVideoElement;
    controlObj.play();
  }, 4000);
})
</script>

<template>
  <section class="full-screen">
    <video ref="video" src="@/assets/videos/steps.mp4" class="mt-5" muted></video>
  </section>
</template>

<style scoped lang="scss">
section {
  overflow: visible;
  margin-bottom: 180px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  video {
    width: 92.5%;
  }
}
</style>
