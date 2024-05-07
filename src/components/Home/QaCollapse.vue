<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>

<template>
  <section id="qa">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center flex-wrap">
          <h2 class="title w-100">常見問題</h2>
          <p class="description">想要開始計劃，但還有許多疑問嗎？</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="Consistency" name="1">
              <div>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or rearranging
                elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
              <div>
                Simplify the process: keep operating process simple and intuitive;
              </div>
              <div>
                Definite and clear: enunciate your intentions clearly so that the
                users can quickly understand and make decisions;
              </div>
              <div>
                Easy to identify: the interface should be straightforward, which helps
                the users to identify and frees them from memorizing and recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>
                Decision making: giving advices about operations is acceptable, but do
                not make decisions for the users;
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
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
    background-color: black;
    padding: 60px 0;
    .title {
      transform: scaleX(125%);
      transform-origin: left;
      color: white;
      width: 75%;
    }
  }
</style>
