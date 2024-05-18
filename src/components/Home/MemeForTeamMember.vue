<script setup lang="ts">

</script>

<template>
<section id="meme">
  <div class="container">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4 main">
        <el-tooltip effect="dark" content="組員: 王正宏" placement="top">
          <img class="me p-4" src="@/assets/images/bugcat/computer-boom.gif" alt="" />
        </el-tooltip>
        <el-tooltip effect="dark" content="組員: 林映璇" placement="bottom">
          <img class="team-member member1" src="@/assets/images/bugcat/sticker_animation@2x-boom.gif" alt="">
        </el-tooltip>
        <el-tooltip effect="dark" content="組員: 許又文" placement="top-start">
          <div>
            <img class="team-member member2" src="@/assets/images/bugcat/sticker_animation@2x-boom2.gif" alt="">
          </div>
        </el-tooltip>
        <el-tooltip effect="dark" content="組員: 方律涵" placement="top">
          <img class="team-member member3" src="@/assets/images/bugcat/sticker_animation@2x-boom2.gif" alt="">
        </el-tooltip>
      </div>
      <div class="col-sm-4"></div>
      <div class="col-12">

      </div>
    </div>
  </div>
</section>
</template>
<style scoped lang="scss">
  #meme {
    overflow: hidden;
  }
  .col-sm-4 {
    position: relative;
  }
  .main {
    transform: scale(60%);
  }
  .me {
    width: 100%;
    object-fit: contain;
  }
  .team-member {
    position: absolute;
  }
  .member1 {
    transform: rotate(15deg);
    right: -29%;
    width: 75%;
  }
  .member2 {
    left: -25%;
    transform: scaleX(-1) rotate(12deg);
    width: 70%;
    bottom: 0;
  }
  .member3 {
    left: -25%;
    transform: scaleX(-1) rotate(-10deg);
    width: 70%;
    top: -20%;
  }
</style>
