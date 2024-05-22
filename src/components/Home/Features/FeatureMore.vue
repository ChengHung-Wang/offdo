<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useHomePageState } from "@/store/home-page-state";

const homePageState = useHomePageState();
const targetListenerDOM = ref<null | HTMLElement>(null);

onMounted(() => {
  const playground = document.querySelector('.playground')
  const list = document.querySelector('.list')
  const items = document.querySelectorAll('.list-item')

  const animationMap = new Map()

  function updateMap() {
    animationMap.clear()
    const playgroundRect = playground.getBoundingClientRect()
    const scrollStart = (playgroundRect.top) + window.scrollY - (window.innerHeight / 2);
    const scrollEnd = (playgroundRect.bottom) + window.scrollY - window.innerHeight
    for (const item of items) {
      animationMap.set(item, getDomAnimation(scrollStart, scrollEnd, item))
    }
  }

  function getDomAnimation(scrollStart, scrollEnd, dom) {
    scrollStart = dom.dataset.order * 1 + scrollStart

    const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0, 1)
    const opacity = function (scroll) {
      return opacityAnimation(scroll)
    }

    const xAnimation = createAnimation(scrollStart, scrollEnd, list.clientWidth / 2 - dom.offsetLeft - dom.clientWidth / 2, 0)
    const yAnimation = createAnimation(scrollStart, scrollEnd, list.clientHeight / 2 - dom.offsetTop - dom.clientHeight / 2, 0)

    const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1)
    const transform = function (scroll) {
      return `translate(${xAnimation(scroll)}px, ${yAnimation(scroll)}px) scale(${scaleAnimation(scroll)})`
    }

    return {
      opacity,
      transform,
    }
  }

  function createAnimation(scrollStart, scrollEnd, valStart, valEnd) {
    return function (scroll) {
      if (scroll <= scrollStart) {
        return valStart
      }
      if (scroll >= scrollEnd) {
        return valEnd
      }
      return (
          valStart +
          ((valEnd - valStart) * (scroll - scrollStart)) / (scrollEnd - scrollStart)
      )
    }
  }

  function updateStyles() {
    const scroll = window.scrollY
    for (let [dom, value] of animationMap) {
      for (const cssProp in value) {
        dom.style[cssProp] = value[cssProp](scroll)
      }
    }
  }
  updateMap()
  updateStyles()

  window.addEventListener('scroll', updateStyles)
});
</script>

<template>
  <section id="feature-more" ref="targetListenerDOM">
    <h2 class="title text-secondary-color text-zip-center text-bold-large w-100"> 更多服務</h2>
    <div class="playground container">
      <div class="animate-container row">
        <div class="list col-12">
          <div data-order="0" class="list-item"></div>
          <div data-order="1" class="list-item"></div>
          <div data-order="2" class="list-item"></div>
          <div data-order="3" class="list-item"></div>
          <div data-order="2" class="list-item"></div>
          <div data-order="1" class="list-item"></div>
          <div data-order="0" class="list-item"></div>
          <div data-order="0" class="list-item"></div>
          <div data-order="1" class="list-item"></div>
          <div data-order="2" class="list-item"></div>
          <div data-order="3" class="list-item"></div>
          <div data-order="2" class="list-item"></div>
          <div data-order="1" class="list-item"></div>
          <div data-order="0" class="list-item"></div>
          <div data-order="1" class="list-item"></div>
          <div data-order="2" class="list-item"></div>
          <div data-order="3" class="list-item"></div>
          <div data-order="2" class="list-item"></div>
          <div data-order="1" class="list-item"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#feature-more {
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 8;
  position: relative;
  max-width: 100vw;
  //overflow-x: hidden;
  .title {
    position: absolute;
    top: 200px;
  }

  .playground {
    height: fit-content;
  }

  .animate-container {
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .list {
    margin-top: 20%;
    position: sticky;
    top: 20%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    height: fit-content;
  }

  .list-item {
    margin: 30px;
    background-color: var(--secondary-color);
    width: 80px;
    height: 80px;
    /* opacity: 0; */
  }
}

</style>
