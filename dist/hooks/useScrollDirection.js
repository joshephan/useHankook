/**
 * useScrollDirection
 *
 * 스크롤 방향을 감지하는 커스텀 훅
 * 페이지의 스크롤이 위로 향하는지 아래로 향하는지 실시간으로 추적합니다.
 *
 * A custom hook for detecting scroll direction
 * Tracks whether the page is scrolling up or down in real-time.
 */
import { useState, useEffect } from 'react';
function useScrollDirection() {
    const [direction, setDirection] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setDirection('down');
            }
            else if (currentScrollY < lastScrollY) {
                setDirection('up');
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return direction;
}
export default useScrollDirection;
