<script setup lang="ts">

</script>

<template>
  <div class="col-sm-4">
    <div class="plan-item">
      <div class="title-outer">
        <h3 class="title text-zip-center">霹哩喀霹哩拉拉 酷酷告別式</h3>
      </div>
      <div class="plan-content">
        <div class="price text-bold-large text-zip-center">
          NT 80,000起
        </div>
        <hr>
        <div class="service-list">
          <div class="row">
            <div class="col-4">
              Lorem ipsum dolor sit.
            </div>
            <div class="col-4">
              Lorem ipsum dolor sit.
            </div>
            <div class="col-4">
              Lorem ipsum dolor sit.
            </div>
          </div>
        </div>
      </div>
      <div class="hint-description">
        和世界說掰掰就趁現在！想來一場主題派對嗎？
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.plan-item {
  height: 557px;
  position: relative;
  background-color: var(--secondary-color);
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 54px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .title-outer {
    position: absolute;
    left: 50%;
    width: calc(100% - (23px * 2));
    height: 87px;
    background-color: var(--primary-color);
    transform: translate(-50%, -18px);
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      color: var(--secondary-color);
      font-size: 24px;
    }
  }
  .plan-content {
    padding-top: 118px;
    box-sizing: border-box;
    .price {
      color: var(--primary-color);
      height: 36px;
      line-height: 36px;
      margin-bottom: 49px;
    }
    hr {
      border-color: black;
      opacity: 1;
    }
    .service-list {
      margin-top: 40px;
      color: black;
    }
  }
  .service-list, .hint-description {
    padding-left: 44px;
    padding-right: 44px;
    font-size: 18px;
  }
  .hint-description {
    color: var(--primary-color);
    text-align: center;
    padding-top: 30px;
    border-top: 1px black solid;
  }
}
</style>
