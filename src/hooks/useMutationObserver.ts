/**
 * useMutationObserver
 * 
 * DOM 변경을 감지하는 커스텀 훅
 * 요소의 속성, 자식 요소, 내용 등의 변경을 모니터링합니다.
 * 
 * A custom hook for detecting DOM changes
 * Monitors changes in element attributes, child elements, and content.
 */
import { useEffect, useRef } from 'react';

interface UseMutationObserverOptions {
  target?: HTMLElement | null;
  config?: MutationObserverInit;
  callback?: MutationCallback;
}

function useMutationObserver(options: UseMutationObserverOptions = {}) {
  const { target, config, callback } = options;
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (!target || !callback) return;

    observerRef.current = new MutationObserver(callback);
    observerRef.current.observe(target, config);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [target, config, callback]);

  return observerRef.current;
}

export default useMutationObserver; 