/**
 * useWindowScroll
 *
 * 윈도우의 스크롤 위치를 추적하는 커스텀 훅
 * 페이지의 X축과 Y축 스크롤 위치를 실시간으로 모니터링합니다.
 *
 * A custom hook for tracking window scroll position
 * Monitors X and Y scroll positions of the page in real-time.
 */
import { useState, useEffect } from 'react';
function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x: window.pageXOffset,
        y: window.pageYOffset
    });
    useEffect(() => {
        const handleScroll = () => {
            setScroll({
                x: window.pageXOffset,
                y: window.pageYOffset
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scroll;
}
export default useWindowScroll;
