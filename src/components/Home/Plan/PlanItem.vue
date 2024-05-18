<script setup lang="ts">
import { defineProps } from 'vue';
import { Plan } from '@/interface/Plan'
const props = defineProps({
  data: Plan
})
</script>

<template>
  <div class="col-sm-4">
    <div class="plan-item">
      <div class="title-outer">
        <h3 class="title text-zip-center">{{ props.data.title }}</h3>
      </div>
      <div class="plan-content">
        <div class="price text-bold-large text-zip-center">
          {{ props.data.price }}
        </div>
        <hr>
        <div class="service-list">
          <div class="row d-flex">
            <div class="col-4" v-for="(value, key) in props.data.service" :key="key">{{ value }}</div>
          </div>
        </div>
      </div>
      <div class="hint-description">
        <div class="row">
          <div class="col-12">
            {{ props.data.hint }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.plan-item {
  height: 557px;
  position: relative;
  background-color: var(--secondary-color);
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 54px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: 0.08s ease-in-out;
  .title-outer {
    position: absolute;
    left: 50%;
    width: calc(100% - (23px * 2));
    height: 87px;
    background-color: var(--primary-color);
    transform: translate(-50%, -18px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.08s ease-in-out;
    .title {
      color: var(--secondary-color);
      transition: 0.08s ease-in-out;
      font-size: 24px;
    }
  }
  .plan-content {
    padding-top: 118px;
    box-sizing: border-box;
    .price {
      color: var(--primary-color);
      height: 36px;
      line-height: 36px;
      margin-bottom: 49px;
      transition: 0.08s ease-in-out;
    }
    hr {
      border-color: black;
      transition: 0.08s ease-in-out;
      opacity: 1;
    }
    .service-list {
      margin-top: 40px;
      transition: 0.08s ease-in-out;
      color: black;
    }
  }

  .service-list, .hint-description {
    padding-left: 44px;
    padding-right: 44px;
    font-size: 18px;
  }
  .hint-description {
    color: var(--primary-color);
    transition: 0.08s ease-in-out;
    text-align: center;
    padding-top: 30px;
    border-top: 1px black solid;
  }
}
.plan-item:hover {
  hr {
    border-color: white;
  }
  background-color: var(--primary-color);
  .title-outer {
    background-color: var(--secondary-color);
    .title {
      color: var(--primary-color);
    }
  }
  .price {
    color: var(--secondary-color);
  }
  .service-list {
    color: white;
  }
  .hint-description {
    border-color: white;
    color: var(--secondary-color);
  }
}
</style>
