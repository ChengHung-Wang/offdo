import { defineStore } from "pinia";
import { ref } from "vue";
import type { FeatureState, ServiceFeatures } from "@/interface/FeatureState";

export const useHomePageState = defineStore('homePageState', {
    state: () => {
        return {
            steps: {
                nowIndex: <number>0,
                nextButtonPressed: <boolean>false
            },
            homeView: {
                dom: <null | HTMLElement>null,
            },
            tooltipToggleBound: {
                open: <number>50,
                close: <number>120
            },
            typewriterEffectConfig: {
                typing: <number>50,
                delete: <number>100,
                step: <number>3
            },
            feature: <ServiceFeatures>{}
        }
    },
    getters: {},
    actions: {
        updateNowIndex(index: number) {
            this.steps.nowIndex = index;
        },
        onScroll: async function () {
            for (const value of Object.entries(this.feature)) {
                try {
                    const thisFeature = value[1] as FeatureState;
                    if (thisFeature.enter) {
                        thisFeature.scrollPercentage = this.scrollPercentage(<HTMLElement>thisFeature.dom)
                        thisFeature.position.x = <number>thisFeature.dom?.getBoundingClientRect().x;
                        thisFeature.position.y = <number>thisFeature.dom?.getBoundingClientRect().y;
                        if (thisFeature.callback !== null) {
                            thisFeature.callback();
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        },
        scrollPercentage(el: HTMLElement): number {
            return 100 - el.getBoundingClientRect().y / (el.offsetHeight / 100);
        },
        featureItemRegister: (
            dom: HTMLElement | null = null,
            title= "",
            tooltipTitle = "",
            tooltipMessage = "",
            callback: null | (() => void) = null): FeatureState => {
            return {
                dom: dom,
                title: title,
                tooltip: {
                    title: tooltipTitle,
                    message: tooltipMessage
                },
                enter: false,
                position: {
                    x: 0,
                    y: 0
                },
                scrollPercentage: 0,
                callback: callback
            }
        }
    }
});
