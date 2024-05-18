<template>
  <div id="hero">
    <div class="container vh-100">
      <div class="row">
        <div class="col-12 description">
          <div>
            <img src="@/assets/images/logo-wh-text.svg" alt="logo" class="logo">
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

<style scoped lang="scss">
  #hero {
    background-color: black;
    background-image: url("@/assets/images/hero-primary-pic.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 2.5vw 45px;
    display: flex;
    text-align: center;
    align-content: center;
    overflow: hidden;
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
</style>

<script setup lang="ts">

</script>
