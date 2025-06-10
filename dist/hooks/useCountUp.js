/**
 * useCountUp
 *
 * 숫자를 부드럽게 증가시키는 애니메이션 효과를 구현하는 커스텀 훅
 * 시작 숫자부터 목표 숫자까지 지정된 시간 동안 점진적으로 증가합니다.
 * 시작, 리셋 기능을 제공합니다.
 *
 * A custom hook for implementing smooth number counting animation
 * Gradually increases from start number to target number over a specified duration.
 * Provides start and reset functionality.
 */
import { useState, useEffect, useCallback } from 'react';
function useCountUp({ start = 0, end, duration = 2000, delay = 0, onComplete }) {
    const [count, setCount] = useState(start);
    const [isRunning, setIsRunning] = useState(false);
    const startCountUp = useCallback(() => {
        setIsRunning(true);
    }, []);
    const reset = useCallback(() => {
        setCount(start);
        setIsRunning(false);
    }, [start]);
    useEffect(() => {
        if (!isRunning)
            return;
        const startTime = Date.now();
        const remaining = end - start;
        let animationFrame;
        const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            if (elapsed >= duration) {
                setCount(end);
                setIsRunning(false);
                onComplete?.();
                return;
            }
            const progress = elapsed / duration;
            const currentCount = Math.floor(start + remaining * progress);
            setCount(currentCount);
            animationFrame = requestAnimationFrame(updateCount);
        };
        const timeoutId = setTimeout(() => {
            animationFrame = requestAnimationFrame(updateCount);
        }, delay);
        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrame);
        };
    }, [isRunning, start, end, duration, delay, onComplete]);
    return { count, isRunning, startCountUp, reset };
}
export default useCountUp;
