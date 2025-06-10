/**
 * useIdle
 * 
 * 사용자의 활동 상태를 감지하는 커스텀 훅
 * 지정된 시간 동안 사용자 활동이 없을 때 유휴 상태로 전환됩니다.
 * 
 * A custom hook for detecting user activity state
 * Transitions to idle state when there is no user activity for a specified duration.
 */
import { useState, useEffect } from 'react';

interface UseIdleOptions {
  timeout?: number;
  events?: string[];
  initialState?: boolean;
}

function useIdle(options: UseIdleOptions = {}) {
  const {
    timeout = 30000,
    events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'],
    initialState = false
  } = options;

  const [isIdle, setIsIdle] = useState(initialState);
  const [lastActive, setLastActive] = useState(Date.now());

  useEffect(() => {
    let timeoutId: number;

    const updateIdleState = () => {
      const now = Date.now();
      setLastActive(now);
      setIsIdle(false);

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    events.forEach(event => {
      window.addEventListener(event, updateIdleState, { passive: true });
    });

    updateIdleState();

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateIdleState);
      });
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, events]);

  return {
    isIdle,
    lastActive
  };
}

export default useIdle; 