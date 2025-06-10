interface UseIntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}
interface UseIntersectionObserverResult {
    ref: (element: Element | null) => void;
    isIntersecting: boolean;
    entry?: IntersectionObserverEntry;
}
declare function useIntersectionObserver(options?: UseIntersectionObserverOptions): UseIntersectionObserverResult;
export default useIntersectionObserver;
