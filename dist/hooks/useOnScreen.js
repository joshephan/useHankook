/**
 * useOnScreen
 *
 * 요소의 화면 표시 여부를 감지하는 커스텀 훅
 * Intersection Observer API를 사용하여 요소가 뷰포트에 보이는지 추적합니다.
 *
 * A custom hook for detecting element visibility on screen
 * Uses Intersection Observer API to track if an element is visible in the viewport.
 */
import { useState, useEffect } from 'react';
function useOnScreen(ref, options = {}) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);
    return isIntersecting;
}
export default useOnScreen;
