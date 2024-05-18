<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
import { useHomePageState } from "@/store/home-page-state";

const homePageState = useHomePageState();

</script>

<template>
  <div id="step-cards">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <el-carousel
              @change="homePageState.updateNowIndex"
              class="w-100 bg-secondary-color"
              height="400px"
              arrow="always"
              :loop="false"
              :autoplay="false"
              indicator-position="none">
            <el-carousel-item>
              <div class="container h-100" id="step1">
                <div class="row h-100">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-7 img-content">
                    <div class="w-50 left">
                      <img src="@/assets/images/steps/step1-left.svg" alt="">
                    </div>
                    <div class="w-50 right">
                      <img src="@/assets/images/steps/step1-right.svg" alt="">
                    </div>
                  </div>
                  <div class="col-sm-3 download-button-container">
                    <input type="button" value="馬上下載" class="download-button" />
                  </div>
                  <div class="col-sm-1"></div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="container h-100" id="step2">
                <div class="row h-100">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-7 img-content">
                    <img src="@/assets/images/steps/step2-todo.svg" alt="">
                  </div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="container h-100" id="step3">
                <div class="row h-100">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-10 img-content">
                    <img src="@/assets/images/steps/step3-evaluate.svg" alt="">
                  </div>
                  <div class="col-sm-1"></div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="container h-100" id="step4">
                <div class="row h-100">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-10 img-content">
                    <img src="@/assets/images/steps/step4-wait-to-dead.svg" alt="">
                  </div>
                  <div class="col-sm-1"></div>
                </div>
              </div>
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
  display: flex;
  justify-content: start;
  padding-bottom: 140px;

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

.img-content {
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
    position: absolute;
  }
}

#step1 {
  .img-content {
    display: flex;
    align-items: end;
  }
  img {
    width: 100%;
    position: relative!important;
  }
  .left {
    transform: rotate(-20deg);
    transform-origin: 90% bottom;
  }
  .left::after {
    content: '';
    position: absolute;
    inset: 0;
    //background-color: white;
  }
  .download-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .download-button {
      width: 100%;
      background-color: black;
      border-radius: 0;
      color: white;
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      padding: 20px 46px;
    }
  }
}
#step1::after {
  content: '';
  position: absolute;
  inset: 0;
  background: white;
  top: 100%;
  z-index: 9999999999;
}

#step4, #step3 {
  img {
    bottom: 0;
  }
}
</style>
