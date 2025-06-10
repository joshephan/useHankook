/**
 * useKeyPress
 * 
 * 키보드 입력을 감지하는 커스텀 훅
 * 특정 키나 키 조합의 눌림 상태를 추적하고 반환합니다.
 * 
 * A custom hook for detecting keyboard input
 * Tracks and returns the pressed state of specific keys or key combinations.
 */
import { useState, useEffect } from 'react';

type KeyFilter = string | string[] | ((event: KeyboardEvent) => boolean);

function useKeyPress(
  keyFilter: KeyFilter,
  options: {
    target?: Window | Document | HTMLElement;
    event?: 'keydown' | 'keyup' | 'keypress';
  } = {}
): boolean {
  const [pressed, setPressed] = useState(false);
  const { target = window, event = 'keydown' } = options;

  useEffect(() => {
    const isKeyMatching = (event: KeyboardEvent): boolean => {
      if (typeof keyFilter === 'function') {
        return keyFilter(event);
      }
      if (Array.isArray(keyFilter)) {
        return keyFilter.includes(event.key);
      }
      return event.key === keyFilter;
    };

    const downHandler = (event: KeyboardEvent) => {
      if (isKeyMatching(event)) {
        setPressed(true);
      }
    };

    const upHandler = (event: KeyboardEvent) => {
      if (isKeyMatching(event)) {
        setPressed(false);
      }
    };

    target.addEventListener(event, downHandler as EventListener);
    target.addEventListener('keyup', upHandler as EventListener);

    return () => {
      target.removeEventListener(event, downHandler as EventListener);
      target.removeEventListener('keyup', upHandler as EventListener);
    };
  }, [keyFilter, target, event]);

  return pressed;
}

export default useKeyPress; 