import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomePageState = defineStore('homePageState', {
    state: () => {
        return {
            steps: ref({
                nowIndex: <number>0,
                nextButtonPressed: <boolean>false
            })
        }
    },
    actions: {
        updateNowIndex(index: number) {
            this.steps.nowIndex = index;
        }
    }
});
