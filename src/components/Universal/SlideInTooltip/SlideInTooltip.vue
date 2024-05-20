<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  title: String,
  message: String,
  open: {
    default: true,
    type: Boolean
  }
})

const toolTipStatus = ref({
  fadeIn: false,
  show: false,
  open: false
});

function toolTipToggle() {
  if (toolTipStatus.value.open) {
    // close
    toolTipStatus.value.open = false;
    toolTipStatus.value.show = false;
    setTimeout(() => {
      toolTipStatus.value.fadeIn = false;
    }, 420)
  }else {
    // open
    toolTipStatus.value.open = true;
    toolTipStatus.value.fadeIn = true;
    setTimeout(() => {
      toolTipStatus.value.show = true;
    }, 420)
  }
}

watch(() => props.open, async (newVal) => {
  toolTipStatus.value.open = !newVal;
  toolTipToggle();
})
</script>

<template>
  <div class="slide-in-tooltip" v-bind:class="{'tooltip-explode': toolTipStatus.show, 'tooltip-fade-in': toolTipStatus.fadeIn}">
    <div class="title">
      <span class="text-zip-center">{{ props.title }}</span>
    </div>
    <div class="message-content">
      <span v-html="props.message"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-in-tooltip {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: -200px;
  width: 10px;
  max-width: calc(100vw - 24px);
  height: 140px;
  background-color: var(--secondary-color);
  transition: .35s cubic-bezier(.79,.27,.56,1.2);
  z-index: 999;

  .title {
    position: absolute;
    background-color: var(--primary-color);
    height: 45px;
    width: 10px;
    top: -22.5px;
    overflow: hidden;

    span {
      color: var(--primary-color);
      transition: .25s ease-in-out;
      font-size: 18px;
      font-weight: bold;
      line-height: 45px;
      display: block;
      user-select: none;
    }
  }

  .message-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;

    span {
      font-size: 20px;
      font-weight: normal;
      line-height: 36px;
      text-align: center;
      transition: .25s ease-in-out;

      user-select: none;
      color: var(--secondary-color);
    }
  }
}

.tooltip-explode {
  width: 500px !important;
  will-change: transform;
  .title {
    width: 75% !important;
    height: 45px !important;

    span {
      user-select: text !important;
      color: white !important;
      transition-delay: .3s;
    }
  }

  .message-content {
    span {
      user-select: text !important;
      color: var(--el-text-color-primary) !important;
      transition-delay: .3s;
    }
  }
}

.tooltip-fade-in {
  bottom: 50px;
}
</style>
