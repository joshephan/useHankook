/**
 * useViewportSize
 *
 * 뷰포트 크기를 감지하는 커스텀 훅
 * 브라우저 창의 크기 변화를 실시간으로 추적합니다.
 *
 * A custom hook for detecting viewport size
 * Tracks browser window size changes in real-time.
 */
import { useState, useEffect } from 'react';
function useViewportSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return size;
}
export default useViewportSize;
