<template>
  <div id="home">
    <HomeHero />
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <QaCollapse />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import HomeHero from "@/components/Home/HomeHero.vue";
import Footer from "@/components/Universal/Footer/FooterContainer.vue";
import QaCollapse from "@/components/Home/QaCollapse.vue";

@Options({
  components: {
    QaCollapse,
    Footer,
    HomeHero,
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
