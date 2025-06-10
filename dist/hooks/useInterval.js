/**
 * useInterval
 *
 * setInterval을 React 훅으로 구현한 커스텀 훅
 * 지정된 시간 간격으로 콜백 함수를 반복 실행합니다.
 *
 * A custom hook that implements setInterval as a React hook
 * Repeatedly executes a callback function at specified time intervals.
 */
import { useEffect, useRef } from 'react';
function useInterval(callback, delay) {
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        if (delay === null)
            return;
        const id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}
export default useInterval;
