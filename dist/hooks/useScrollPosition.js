/**
 * useScrollPosition
 *
 * 스크롤 위치를 추적하는 커스텀 훅
 * 윈도우나 특정 요소의 스크롤 위치를 실시간으로 모니터링합니다.
 *
 * A custom hook for tracking scroll position
 * Monitors scroll position of window or specific element in real-time.
 */
import { useState, useEffect } from 'react';
function useScrollPosition(options = {}) {
    const { element, throttle = 100 } = options;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        let timeoutId;
        const target = element || window;
        const handleScroll = () => {
            if (timeoutId) {
                return;
            }
            timeoutId = window.setTimeout(() => {
                const x = element ? element.scrollLeft : window.pageXOffset;
                const y = element ? element.scrollTop : window.pageYOffset;
                setPosition({ x, y });
                timeoutId = undefined;
            }, throttle);
        };
        target.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            target.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [element, throttle]);
    return position;
}
export default useScrollPosition;
