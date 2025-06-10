interface ScrollPosition {
    x: number;
    y: number;
}
interface UseScrollPositionOptions {
    element?: HTMLElement | null;
    throttle?: number;
}
declare function useScrollPosition(options?: UseScrollPositionOptions): ScrollPosition;
export default useScrollPosition;
