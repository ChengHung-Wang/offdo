<script setup lang="ts">
  import CounterNumber from "@/components/Home/Counter/CounterNumber.vue";
  import CounterAnimation from "@/components/Home/Counter/CounterAnimation.vue";
</script>

<template>
  <section id="counter">
    <div class="container">
      <div class="row h-100">
        <div class="col-sm-3 h-100 overflow-visible">
          <CounterAnimation />
        </div>
        <div class="col-sm-2">
          <img src="@/assets/images/star-left.svg" alt="">
        </div>
        <CounterNumber title="合作廠商數" :target="88" prefix="間" class="text-secondary-color col-sm-3 mt-5" />
        <CounterNumber title="迄今完成委託數" :target="174" prefix="件" class="text-primary-color star-right col-sm-3 mt-3" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  #counter {
    // TODO: change to dynamic
    max-height: 650px;
    position: relative;
    margin-bottom: 100px;
    margin-top: 300px;
    overflow: hidden;
    .container {
      background-color: black;
      height: 100%;
      overflow: visible;
      .row {
        display: flex;
        align-items: end;
      }
    }
    .star-right {
      position: relative;
      padding-top: 90px;
    }
    .star-right::after {
      content: '';
      position: absolute;
      background-image: url("@/assets/images/star-right.svg");
      width: calc(100% + 100px);
      height: 100%;
      background-repeat: no-repeat;
      background-position: right top;
      inset: 0;
    }

  }
  #counter::before {
    content: '';
    background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    inset: 0;
    height: 250px;
    width: 100%;
    top: -70px;
    z-index: 9;
  }
</style>
