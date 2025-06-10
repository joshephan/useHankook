/**
 * useDebounce
 * 
 * 입력값의 디바운스 처리를 위한 커스텀 훅
 * 연속적으로 발생하는 이벤트를 지정된 시간 동안 기다린 후 마지막 이벤트만 처리합니다.
 * 
 * A custom hook for debouncing input values
 * Waits for a specified time before processing the last event among consecutive events.
 */
import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce; 