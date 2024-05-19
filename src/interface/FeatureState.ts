export default interface FeatureState {
    dom: null | HTMLElement;
    title: string;
    tooltip: {
        title: string,
        message: string
    };
    enter: boolean;
    position: {
        x: number,
        y: number
    };
    scrollPercentage: number;
    callback: null | (() => void);
}
