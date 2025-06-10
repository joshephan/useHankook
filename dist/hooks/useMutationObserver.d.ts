interface UseMutationObserverOptions {
    target?: HTMLElement | null;
    config?: MutationObserverInit;
    callback?: MutationCallback;
}
declare function useMutationObserver(options?: UseMutationObserverOptions): MutationObserver | null;
export default useMutationObserver;
