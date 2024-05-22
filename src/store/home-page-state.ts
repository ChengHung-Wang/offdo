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
                open: <number>40,
                close: <number>130
            },
            typewriterEffectConfig: {
                typing: <number>70,
                delete: <number>130,
                step: <number>3,
                delay: 50
            },
            featureHuman: {
                clothing: {
                    display: false,
                    image: require("@/assets/images/feature/clothing/nude.svg")
                },
                location: {
                    display: false,
                    image: require("@/assets/images/feature/location/nightclub.png")
                },
                method: {
                    display: false,
                    image: require("@/assets/images/feature/location/nightclub.png")
                }
            },
            feature: <ServiceFeatures>{}
        }
    },
    getters: {},
    actions: {
        updateNowIndex(index: number) {
            this.steps.nowIndex = index;
        },
        onServiceFeatureScroll: async function () {
            for (const value of Object.entries(this.feature)) {
                const thisFeature = value[1] as FeatureState;
                try {
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
            title = "",
            callback: null | (() => void) = null): FeatureState => {
            return {
                dom: dom,
                title: title,
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
