interface FeatureState {
    dom: null | HTMLElement;
    title: string;
    enter: boolean;
    position: {
        x: number,
        y: number
    };
    scrollPercentage: number;
    callback: null | (() => void);
}

interface ServiceFeatures {
    human?: FeatureState,
    clothing?: FeatureState,
    location?: FeatureState,
    method?: FeatureState,
    more?: FeatureState
}

export { FeatureState, ServiceFeatures }
