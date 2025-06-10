/**
 * useIntersectionObserver
 *
 * 요소의 가시성을 감지하는 커스텀 훅
 * Intersection Observer API를 사용하여 요소가 뷰포트에 보이는지 여부를 추적합니다.
 *
 * A custom hook for detecting element visibility
 * Uses Intersection Observer API to track whether an element is visible in the viewport.
 */
import { useEffect, useRef, useState } from 'react';
function useIntersectionObserver(options = {}) {
    const [entry, setEntry] = useState();
    const [element, setElement] = useState(null);
    const observer = useRef(null);
    useEffect(() => {
        if (!element)
            return;
        observer.current = new IntersectionObserver(([entry]) => {
            setEntry(entry);
        }, options);
        observer.current.observe(element);
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [element, options]);
    return {
        ref: setElement,
        isIntersecting: entry?.isIntersecting ?? false,
        entry
    };
}
export default useIntersectionObserver;
