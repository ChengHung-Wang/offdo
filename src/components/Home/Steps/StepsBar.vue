<script setup lang="ts">
import { useHomePageState } from "@/store/home-page-state";

const homePageState = useHomePageState();
</script>

<template>
  <div class="row steps-status-bar">
<!--    <div class="col-12 animation-icon-container">-->
<!--      <div class="animation-icon">-->
<!--        <div class="icon"></div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="col-12">
      <div class="d-flex">
        <div class="step-1" v-bind:class="{'bg-primary-color': homePageState.steps.nowIndex == 0}">
          <div class="description">前往下載</div>
        </div>
        <div class="step-2" v-bind:class="{'bg-primary-color': homePageState.steps.nowIndex == 1}">
          <div class="description">訂製亡后計劃</div>
        </div>
        <div class="step-3" v-bind:class="{'bg-primary-color': homePageState.steps.nowIndex == 2}">
          <div class="description">專人評估</div>
        </div>
        <div class="step-4" v-bind:class="{'bg-primary-color': homePageState.steps.nowIndex == 3}">
          <div class="description">安心等死</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.steps-status-bar {
  margin-top: 120px;
  margin-bottom: 160px;
  position: relative;
  .animation-icon-container {
    height: 91px;
    position: absolute;
    top: -103px;
  }
  .animation-icon {
    position: absolute;
    height: 91px;
    top: 0;
    width: calc(100% - 24px);
    right: 0;
    left: 12px;
    .icon {
      transition: .2s ease-in-out;
      width: 74px;
      height: 91px;
      background-image: url("@/assets/images/step-bar/running-man.svg");
    }
  }
}

[class^="step-"] {
  height: 10px;
  background-color: white;
  margin-right: 12px;
  min-width: calc(18% - 12px);
  display: flex;
  justify-content: center;
  font-size: 20px;
  transition: ease-in-out .15s;
  .description {
    color: white;
    font-weight: bold;
    margin-top: 30px;
    transform: scaleX(125%);
  }
}
.step-2 {
  width: calc(23% - 12px);
}
.step-3 {
  width: calc(27% - 12px);
}
.step-4 {
  width: calc(100% - (18% - 12px) - (23% - 12px) - (27% - 12px));
  margin-right: 0;
}
</style>
