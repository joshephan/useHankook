/**
 * useHold
 * 
 * 요소를 길게 누르는 동작을 처리하는 커스텀 훅
 * 지정된 시간 동안 누르고 있을 때 콜백 함수를 주기적으로 실행합니다.
 * 
 * A custom hook for handling long press interactions
 * Periodically executes a callback function while an element is being held for a specified duration.
 */
import { useCallback, useRef } from 'react';

interface UseHoldOptions {
  delay?: number;
  interval?: number;
}

function useHold(
  callback: () => void,
  options: UseHoldOptions = {}
) {
  const { delay = 500, interval = 100 } = options;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHoldingRef = useRef(false);

  const startHold = useCallback(() => {
    isHoldingRef.current = true;
    timeoutRef.current = setTimeout(() => {
      callback();
      intervalRef.current = setInterval(callback, interval);
    }, delay);
  }, [callback, delay, interval]);

  const endHold = useCallback(() => {
    isHoldingRef.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  return {
    onMouseDown: startHold,
    onMouseUp: endHold,
    onMouseLeave: endHold,
    onTouchStart: startHold,
    onTouchEnd: endHold,
    isHolding: isHoldingRef.current
  };
}

export default useHold; 