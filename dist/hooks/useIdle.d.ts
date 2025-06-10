interface UseIdleOptions {
    timeout?: number;
    events?: string[];
    initialState?: boolean;
}
declare function useIdle(options?: UseIdleOptions): {
    isIdle: boolean;
    lastActive: number;
};
export default useIdle;
