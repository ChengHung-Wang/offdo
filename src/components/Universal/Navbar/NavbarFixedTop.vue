<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-secondary-color">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo.svg" alt="Bootstrap" height="60">
      </a>
      <NavbarCollapses :idName="idName" />

      <div class="collapse navbar-collapse" :id="idName">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <NavbarItem text="概要" />
          <NavbarItem text="服務費用計算機" />
        </ul>
        <div class="d-flex justify-content-center" role="search">
          <el-button type="primary" round>開始使用</el-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>

<script lang="ts" setup>
import NavbarItem from "@/components/Universal/Navbar/NavbarItem.vue";
import NavbarCollapses from "@/components/Universal/Navbar/NavbarCollapses.vue";

const idName = "navbarToggles";
</script>
