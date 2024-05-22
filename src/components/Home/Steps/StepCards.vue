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
                  <div class="col-sm-12 img-content">
                    <img src="@/assets/images/steps/step2-human.svg" class="w-100" alt="">
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
  padding-bottom: 200px;

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
  .left::after, .left::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .left::before {
    background-color: black;
    top: 56.5%;
    bottom: -15%;
    z-index: 1;
    left: -50%;
    transform: rotate(20deg);
    transform-origin: 10% bottom;
  }
  .left::after {
    content: "";
    z-index: 2;
    inset: 0;
    height: 140%;
    left: 12%;
    width: 140%;
    top: -20%;
    background-image: url("@/assets/images/steps/step1-phone.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .left {
    transform: rotate(-20deg);
    transform-origin: 90% bottom;
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

#step2 {
  .row {
    display: flex;
    align-content: end;
  }
  .img-content {
    display: flex;
    position: relative;
    align-items: end;
    height: fit-content;
    img {
      position: relative;
    }
  }
  .img-content::after {
    content: "";
    background-image: url("@/assets/images/steps/step2-paper.svg");
    position: absolute;
    width: calc(100% - 24px);
    height: calc(100% + 33%);
    background-position: left top;
    background-repeat: no-repeat;
    z-index: 2;
    bottom: -33%;
    background-size: contain;
  }
}

#step4, #step3 {
  img {
    bottom: 0;
  }
}
</style>
