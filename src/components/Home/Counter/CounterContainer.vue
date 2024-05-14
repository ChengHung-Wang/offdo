<script setup lang="ts">
  import CounterNumber from "@/components/Home/Counter/CounterNumber.vue";
  import CounterAnimation from "@/components/Home/Counter/CounterAnimation.vue";
</script>

<template>
  <section id="counter">
    <div class="container">
      <div class="row h-100">
        <div class="col-sm-3 h-100">
          <CounterAnimation />
        </div>
        <div class="col-sm-2"></div>
        <CounterNumber title="合作廠商數" :target="88" class="text-secondary-color col-sm-3 mt-5" />
        <CounterNumber title="迄今完成委託數" :target="174" class="text-primary-color col-sm-3 mt-3" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  #counter {
    // TODO: change to dynamic
    min-height: 750px;
    position: relative;
    margin-bottom: 150px;
    .container {
      background-color: black;
      height: 100%;
      overflow: hidden;
      .row {
        display: flex;
        align-items: end;
      }
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
