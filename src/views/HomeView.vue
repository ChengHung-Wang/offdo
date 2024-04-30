<template>
  <div id="home">
    <HomeHero />
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import HomeHero from "@/components/Home/HomeHero.vue";

@Options({
  components: {
    HomeHero,
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
