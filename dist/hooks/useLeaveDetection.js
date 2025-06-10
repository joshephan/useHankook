/**
 * useLeaveDetection
 *
 * 마우스가 페이지를 벗어나는 것을 감지하는 커스텀 훅
 * 페이지 이탈 시점을 감지하고 콜백 함수를 실행합니다.
 *
 * A custom hook for detecting when the mouse leaves the page
 * Detects page exit moments and executes callback functions.
 */
import { useEffect, useRef } from 'react';
function useLeaveDetection(options = {}) {
    const { onLeave, onEnter } = options;
    const isLeaving = useRef(false);
    useEffect(() => {
        const handleMouseLeave = (event) => {
            if (event.clientY <= 0 && !isLeaving.current) {
                isLeaving.current = true;
                onLeave?.();
            }
        };
        const handleMouseEnter = () => {
            if (isLeaving.current) {
                isLeaving.current = false;
                onEnter?.();
            }
        };
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [onLeave, onEnter]);
    return isLeaving.current;
}
export default useLeaveDetection;
