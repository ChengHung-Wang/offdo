<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
</script>

<template>
  <div id="step-cards">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <el-carousel class="w-100 bg-secondary-color" height="400px" motion-blur :loop="false" indicator-position="none">
            <el-carousel-item v-for="item in 4" :key="item">
              <h1 class="justify-center text-primary">{{ item }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quia.</h1>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #step-cards {
    width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: start;
    .step-card {
      background-color: var(--secondary-color);
      width: 30vw;
      height: 400px;
      margin-right: 100px;
    }
    .step-card:last-child {
      margin-right: 0;
    }
    .cards-container {
      display: inline-flex;
      width: 100%;
    }
  }
</style>
