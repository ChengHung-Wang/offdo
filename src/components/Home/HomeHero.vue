<template>
  <div id="hero" ref="hero" v-bind:class="{'mobile': isMobile}">
    <div class="container vh-100">
      <div class="row desktop" v-if="!isMobile">
        <div class="col-sm-6 hero-img-outer">
          <div class="hero-img">
            <img class="coffin" src="../../assets/images/hero/hero-coffin.svg" alt="">
            <img class="coffin-door" v-bind:class="{'coffin-door-close': nowProgress > 120}" src="../../assets/images/hero/hero-coffin-door.svg" alt="">
          </div>
        </div>
        <div class="col-sm-6 description">
          <div>
            <img src="../../assets/images/logo-wh-text.svg" alt="logo" class="logo">
            <p>不想辦平凡傳統的那種葬禮？</p>
            <p>想要在告別式展現自己的個人
              <mark>風格</mark>
              ？
            </p>
            <p>想在最後
              <mark>瘋</mark>
              一次？
            </p>
            <p>
              <mark style="color: var(--secondary-color)">亡者計劃</mark>
              在你離開後，實現你
              <mark>大膽的夢想</mark>
              !
            </p>
          </div>
        </div>
      </div>
      <div class="row" v-if="isMobile">
        <div class="col-12 description">
          <div>
            <img src="../../assets/images/logo-wh-text.svg" alt="logo" class="logo">
            <p>不想辦平凡傳統的那種葬禮？</p>
            <p>想要在告別式展現自己的個人<mark>風格</mark>？</p>
            <p>想在最後<mark>瘋</mark>一次？</p>
            <p><mark style="color: var(--secondary-color)">亡者計劃</mark>在你離開後，實現你<mark>大膽的夢想</mark> !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import device from "current-device";

const hero = ref<HTMLElement | null>(null);
const nowProgress = ref<number>(0);
const isMobile = ref<boolean>(device.mobile() || device.ipad());

onMounted(() => {
  hero.value.addEventListener("wheel", (e) => {
    const perPercent = (hero.value as HTMLElement).clientHeight / 100;
    nowProgress.value = 100 - (hero.value as HTMLElement).getBoundingClientRect().y / perPercent;
  })
});
</script>

<style scoped lang="scss">
#hero {
  background-color: black;
  display: flex;
  text-align: center;
  align-content: center;
  overflow: hidden;
  .row {
    display: flex;
    align-items: self-end;
    justify-content: center;
  }

  .hero-img-outer {
    .hero-img {
      display: flex;
      position: sticky;
      height: fit-content;
      width: 150%;
      flex-wrap: wrap;
      justify-content: start;

      .coffin {
        height: 100%;
      }

      .coffin-door {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        transition: .5s ease-in-out;
      }

      .coffin-door-close {
        left: -271px !important;
        top: -141px !important;
      }
    }
    .hero-img::before {
      content: '';
      position: absolute;
      background-image: url("@/assets/videos/cloud.gif");
      background-size: contain;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      top: calc(-100% + 265.5px);
    }
  }

  mark {
    background-color: var(--primary-color);
    color: white;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100vh;
    color: white;
    font-weight: 700;

    .logo {
      height: 80px;
      margin-bottom: 12px;
    }

    p {
      font-size: 25px;
      transform: scaleY(0.85);
    }
  }

  .description::before, .description::after {
    content: '';
    position: relative;
    width: 100px;
    height: 100px;
  }

  .description::before {
    left: 0;
    top: 20px;
    background-image: url("@/assets/images/star-left.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .description::after {
    right: 0;
    top: -150px;
    background-image: url("@/assets/images/star-right.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}


#hero.mobile {
  background-color: black;
  background-image: url("@/assets/images/hero-primary-pic.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 2.5vw 45px;
  display: flex;
  text-align: center;
  align-content: center;
  overflow: hidden;

  .row {
    height: 100%;
    padding-bottom: 60px;
  }

  .description {
    height: auto;
  }
}
</style>

