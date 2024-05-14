<script lang="ts" setup>
import { ref } from 'vue'
import { ElCollapse, ElCollapseItem } from 'element-plus'
import SectionTitle from "@/components/Universal/Title/SectionTitle.vue";
import { useHomePageData } from "@/store/home-page-data";

const activeName = ref('1')
</script>

<template>
  <section id="qa">
    <div class="container">
      <SectionTitle title="常見問題" subtitle="想要開始計畫，但還有許多疑問嗎？" />
      <div class="row">
        <div class="col-12">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(data, index) in (useHomePageData()).qa" :key="index" :name="index">
              <template #title>
                <img class="collapse-header" :src="data.icon" alt="">
                <span class="collapse-header-description">
                  {{ data.title }}
                </span>
              </template>
              <div>
                {{ data.description }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  #qa {
    // override
    .el-collapse {
      --el-collapse-header-bg-color: black;
      --el-collapse-header-text-color: white;
      --el-collapse-content-bg-color: var(--primary-color);
      --el-collapse-content-font-size: 18px;
      --el-collapse-header-font-size: 18px;
      --el-collapse-content-text-color: white;
      --el-collapse-border-color: var(--secondary-color);
      border-top: 0;
      text-align: left;
    }

    .el-collapse-item__header {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    background-color: black;
    padding: 60px 0;
    .title {
      transform: scaleX(125%);
      color: white;
    }
    .collapse-header {
      color: var(--secondary-color);
      font-size: 48px;
      font-weight: bold;
      margin: 30px 10px 30px 0;
    }
    .collapse-header-description {
      font-weight: 400;
    }
  }
</style>
<style>
.el-collapse-item> button {
  padding-bottom: 40px;
  padding-top: 40px;
}
.el-collapse-item__content {
  padding: 25px;
}
</style>
