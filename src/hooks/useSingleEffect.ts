/**
 * useSingleEffect
 * 
 * effect를 한 번만 실행하는 커스텀 훅
 * 컴포넌트의 생명주기 동안 effect를 단 한 번만 실행합니다.
 * 
 * A custom hook for running effect only once
 * Executes effect only once during component's lifecycle.
 */
import { useEffect, useRef } from 'react';

function useSingleEffect(callback: () => void | (() => void)) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      return callback();
    }
  }, [callback]);
}

export default useSingleEffect; 