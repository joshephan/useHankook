/**
 * usePrevious
 * 
 * 이전 값을 저장하는 커스텀 훅
 * 현재 값의 이전 상태를 추적하고 참조할 수 있게 해줍니다.
 * 
 * A custom hook for storing previous value
 * Allows tracking and referencing the previous state of the current value.
 */
import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious; 