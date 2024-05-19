<template>
  <div id="home" ref="home">
    <HomeHero />
    <StepsSection />
    <FeatureSection />
    <CaseShareSection />
    <PlanContainer />
    <QaCollapse />
    <CounterContainer />
    <Footer />
    <MemeForTeamMember v-if="meme" />
  </div>
</template>

<style lang="scss">
#home {
  width: 100vw;
  background-color: black;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useHomePageState } from '@/store/home-page-state';
import HomeHero from "@/components/Home/HomeHero.vue";
import Footer from "@/components/Universal/Footer/FooterContainer.vue";
import QaCollapse from "@/components/Home/QaCollapse.vue";
import StepsSection from "@/components/Home/Steps/StepsSection.vue";
import CounterContainer from "@/components/Home/Counter/CounterContainer.vue";
import PlanContainer from "@/components/Home/Plan/PlanContainer.vue";
import CaseShareSection from "@/components/Home/CaseShare/CaseShareSection.vue";
import FeatureSection from "@/components/Home/Features/FeatureSection.vue";
import MemeForTeamMember from "@/components/Home/MemeForTeamMember.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeHero,
    Footer,
    QaCollapse,
    StepsSection,
    CounterContainer,
    PlanContainer,
    CaseShareSection,
    MemeForTeamMember,
    FeatureSection
  },
  setup() {
    const home = ref(null);
    const meme = ref(false);
    const homePageState = useHomePageState();

    onMounted(() => {
      homePageState.homeView.dom = home.value;
      window.addEventListener("wheel", () => {
        homePageState.onScroll();
      });
    })
    return {
      home,
      homePageState,
      meme
    };
  }
});
</script>
