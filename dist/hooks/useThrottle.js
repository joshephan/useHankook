/**
 * useThrottle
 *
 * 함수 호출을 제한하는 커스텀 훅
 * 지정된 시간 간격으로 함수 호출을 제한하여 성능을 최적화합니다.
 *
 * A custom hook for throttling function calls
 * Limits function calls at specified time intervals to optimize performance.
 */
import { useCallback, useRef } from 'react';
function useThrottle(callback, delay) {
    const lastRun = useRef(0);
    const timeout = useRef(null);
    return useCallback((...args) => {
        const now = Date.now();
        if (lastRun.current && now < lastRun.current + delay) {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            timeout.current = setTimeout(() => {
                lastRun.current = now;
                callback(...args);
            }, delay);
        }
        else {
            lastRun.current = now;
            callback(...args);
        }
    }, [callback, delay]);
}
export default useThrottle;
