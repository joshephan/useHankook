interface UseLeaveDetectionOptions {
    onLeave?: () => void;
    onEnter?: () => void;
}
declare function useLeaveDetection(options?: UseLeaveDetectionOptions): boolean;
export default useLeaveDetection;
