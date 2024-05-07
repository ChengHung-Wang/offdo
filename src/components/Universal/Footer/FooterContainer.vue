<script setup lang="ts">

import FooterHeader from "@/components/Universal/Footer/FooterHeader.vue";
import FooterItem from "@/components/Universal/Footer/FooterItem.vue";
</script>

<template>
  <footer>
    <div class="container">
      <div class="row w-100">
        <div class="col-sm-3 mb-4">
          <FooterHeader text="支持服務" />
          <FooterItem text="聯繫客服" />
          <FooterItem text="管理我的帳戶" />
        </div>
        <div class="col-sm-3 mb-4">
          <FooterHeader text="活動" />
          <FooterItem text="優惠促銷" />
          <FooterItem text="BrainBoom 競賽" />
        </div>
        <div class="col-sm-3 mb-4">
          <FooterHeader text="關於 offdo" />
          <FooterItem text="品牌故事" />
          <FooterItem text="QA問答" />
          <FooterItem text="聯絡我們" />
          <FooterItem text="成為合作夥伴" />
          <FooterItem text="商業倫理與法規道德" />
        </div>
        <div class="col-sm-3 mb-4">
          <img src="@/assets/images/logo.svg" class="logo"  alt="offdo logo"/>
          <span class="text-white">從以下管道下載 APP，並開始使用服務。</span>
          <div class="d-flex justify-content-start">
            <img class="download-weight" src="@/assets/images/weight/app_store_download.svg" alt="">
            <img class="download-weight" src="@/assets/images/weight/google_play_download.svg" alt="">
          </div>
        </div>
      </div>
      <div class="row bottom-row">
        <div class="col-12 d-flex flex-wrap">
          <router-link to="" class="bottom-item">使用條款</router-link>
          <router-link to="" class="bottom-item">隱私權政策</router-link>
          <router-link to="" class="bottom-item">安全性</router-link>
          <router-link to="" class="bottom-item">網站地圖</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    min-height: 500px;
    background-color: var(--primary-color);
    padding-top: 80px;
    padding-bottom: 70px;
    position: relative;
    .container {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
    }
    .footer-header {
      margin-bottom: 40px;
      text-align: left;
      color: var(--secondary-color);
      font-weight: 700;
      transform: scaleX(125%);
      transform-origin: left;
    }
    .footer-item {
      margin: 0 auto;
      text-decoration: none;
      color: var(--secondary-color);
      display: block;
      text-align: left;
      font-weight: 600;
    }
    .logo {
      filter: invert(1);
      margin-bottom: 30px;
      display: block;
    }
    span, p, a{
      text-align: left!important;
      display: block
    }
    .download-weight {
      height: 45px;
      margin-top: 30px;
    }
    .download-weight:first-child {
      margin-right: 15px;
    }
    .bottom-item {
      color: white;
      margin-right: 50px;
      text-decoration: none;
      font-weight: 500;
    }
    .bottom-row {
      position: absolute;
      bottom: 70px;
    }
  }
</style>
