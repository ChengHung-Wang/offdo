import { defineStore } from "pinia";
import { ref } from "vue";
import type FeatureState from "@/interface/FeatureState";

export const useHomePageState = defineStore('homePageState', {
    state: () => {
        return {
            steps: ref({
                nowIndex: <number>0,
                nextButtonPressed: <boolean>false
            }),
            homeView: ref({
                dom: <null | HTMLElement>null,
            }),
            tooltipToggleBound: ref({
                open: <number>50,
                close: <number>120
            }),
            typewriterEffectConfig: ref({
                typing: <number>50,
                delete: <number>100,
                step: <number>3
            }),
            feature: ref<{ [key: string]: FeatureState }>({})
        }
    },
    getters: {
        featureItemConstructor: (): FeatureState => {
            return {
                dom: null,
                title: "",
                tooltip: {
                    title: "",
                    message: ""
                },
                enter: false,
                position: {
                    x: 0,
                    y: 0
                },
                scrollPercentage: 0,
                callback: null
            }
        }
    },
    actions: {
        updateNowIndex(index: number) {
            this.steps.nowIndex = index;
        },
        onScroll: async function () {
            Object.entries(this.$state.feature).some(async (value) => {
                try {
                    const thisFeature = <FeatureState>value[1];
                    console.log('scroll');
                    if (thisFeature.enter) {
                        thisFeature.scrollPercentage = this.scrollPercentage(<HTMLElement>thisFeature.dom)
                        thisFeature.position.x = <number>thisFeature.dom?.getBoundingClientRect().x;
                        thisFeature.position.y = <number>thisFeature.dom?.getBoundingClientRect().y;
                        if (thisFeature.callback !== null) {
                            thisFeature.callback();
                        }
                        return true;
                    }
                } catch (e) {
                    console.log(e);
                }
            })
        },
        scrollPercentage(el: HTMLElement): number {
            return 100 - el.getBoundingClientRect().y / (el.offsetHeight / 100);
        }
    }
});
