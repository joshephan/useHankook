interface UseHoldOptions {
    delay?: number;
    interval?: number;
}
declare function useHold(callback: () => void, options?: UseHoldOptions): {
    onMouseDown: () => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
    isHolding: boolean;
};
export default useHold;
