<script setup lang="ts">

import FooterHeader from "@/components/Universal/Footer/FooterHeader.vue";
import FooterItem from "@/components/Universal/Footer/FooterItem.vue";
import { ref } from "vue";
import MemeForTeamMember from "@/components/Home/MemeForTeamMember.vue";

const open = ref(false);
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 mb-4">
          <FooterHeader text="支持服務" />
          <FooterItem @click="open = true" text="聯繫客服" />
          <FooterItem @click="open = true" text="管理我的帳戶" />
        </div>
        <div class="col-sm-3 mb-4">
          <FooterHeader text="活動" />
          <FooterItem @click="open = true" text="優惠促銷" />
          <FooterItem @click="open = true" text="BrainBoom 競賽" />
        </div>
        <div class="col-sm-3 mb-4">
          <FooterHeader text="關於 offdo" />
          <FooterItem @click="open = true" text="品牌故事" />
          <FooterItem @click="open = true" text="QA問答" />
          <FooterItem @click="open = true" text="聯絡我們" />
          <FooterItem @click="open = true" text="成為合作夥伴" />
          <FooterItem @click="open = true" text="商業倫理與法規道德" />
        </div>
        <div class="col-sm-3 mb-4 flex-wrap">
          <img src="@/assets/images/logo.svg" class="logo"  alt="offdo logo"/>
          <span class="text-white">從以下管道下載 App，並開始使用服務。</span>
          <div class="d-flex justify-content-start flex-wrap">
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
       <div class="w-100 text-white" style="font-size: 10px; margin-top: 16px;">
         Copyright © 2024 offdo.inc All rights reserved.
       </div>
      </div>
    </div>

    <el-dialog v-model="open" title="組員介紹" width="calc(100vw - 48px)">
      <MemeForTeamMember />
    </el-dialog>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    min-height: 500px;
    background-color: var(--primary-color);
    padding-top: 80px;
    padding-bottom: 70px;
    position: relative;
    overflow-y: visible;
    width: 100vw;
    overflow-x: hidden;
    .footer-header {
      margin-bottom: 40px;
      text-align: left;
      color: var(--secondary-color);
      font-weight: 700;
      transform: scaleX(125%);
      transform-origin: left;
    }
    .footer-item {
      margin-top: 0;
      margin-bottom: 7px;
      text-decoration: none;
      color: var(--secondary-color);
      display: block;
      text-align: left;
      font-weight: 400;
      font-size: 18px;
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
      position: relative;
      bottom: 0;
    }
  }
</style>
