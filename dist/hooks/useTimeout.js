/**
 * useTimeout
 *
 * setTimeout을 관리하는 커스텀 훅
 * 타이머의 설정과 해제를 쉽게 관리할 수 있게 해줍니다.
 *
 * A custom hook for managing setTimeout
 * Provides easy management of timer setup and cleanup.
 */
import { useCallback, useRef, useEffect } from 'react';
function useTimeout(callback, delay) {
    const timeoutRef = useRef(null);
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    const set = useCallback(() => {
        if (delay === null)
            return;
        timeoutRef.current = setTimeout(() => {
            savedCallback.current();
        }, delay);
    }, [delay]);
    const clear = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);
    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);
    return { set, clear };
}
export default useTimeout;
