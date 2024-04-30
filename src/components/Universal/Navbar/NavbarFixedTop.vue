<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-secondary-color">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo.svg" class="my-2" alt="Bootstrap" height="50">
      </a>
      <NavbarCollapses :idName="idName" />

      <div class="collapse navbar-collapse" :id="idName">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <NavbarItem text="概要" />
          <NavbarItem text="服務費用計算機" />
        </ul>
        <div class="d-flex justify-content-center ms-4" role="search">
          <el-button class="start-use" type="primary" round size="large"><strong>開始使用</strong></el-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.collapse {
  transform: scaleY(0.9);
  font-size: 18px;
  font-weight: 600;
}
.start-use {
  font-size: 18px;
  font-weight: 600;
}
</style>

<script lang="ts" setup>
import NavbarItem from "@/components/Universal/Navbar/NavbarItem.vue";
import NavbarCollapses from "@/components/Universal/Navbar/NavbarCollapses.vue";

const idName = "navbarToggles";
</script>
