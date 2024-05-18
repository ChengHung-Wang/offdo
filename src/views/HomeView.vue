<template>
  <div id="home">
    <HomeHero />
    <StepsSection />
    <FeatureSection />
    <CaseShareSection />
    <PlanContainer />
    <QaCollapse />
    <CounterContainer />
    <Footer />
<!--    <MemeForTeamMember />-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import HomeHero from "@/components/Home/HomeHero.vue";
import Footer from "@/components/Universal/Footer/FooterContainer.vue";
import QaCollapse from "@/components/Home/QaCollapse.vue";
import StepsSection from "@/components/Home/Steps/StepsSection.vue";
import CounterContainer from "@/components/Home/Counter/CounterContainer.vue";
import PlanContainer from "@/components/Home/Plan/PlanContainer.vue";
import CaseShareSection from "@/components/Home/CaseShare/CaseShareSection.vue";
import MemeForTeamMember from "@/components/Home/MemeForTeamMember.vue";
import FeatureSection from "@/components/Home/Features/FeatureSection.vue";

@Options({
  components: {
    FeatureSection,
    MemeForTeamMember,
    CaseShareSection,
    PlanContainer,
    CounterContainer,
    StepsSection,
    QaCollapse,
    Footer,
    HomeHero,
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
