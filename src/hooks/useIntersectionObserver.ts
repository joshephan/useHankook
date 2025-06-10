/**
 * useIntersectionObserver
 * 
 * 요소의 가시성을 감지하는 커스텀 훅
 * Intersection Observer API를 사용하여 요소가 뷰포트에 보이는지 여부를 추적합니다.
 * 
 * A custom hook for detecting element visibility
 * Uses Intersection Observer API to track whether an element is visible in the viewport.
 */
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface UseIntersectionObserverResult {
  ref: (element: Element | null) => void;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverResult {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [element, setElement] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!element) return;

    observer.current = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    observer.current.observe(element);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [element, options]);

  return {
    ref: setElement,
    isIntersecting: entry?.isIntersecting ?? false,
    entry
  };
}

export default useIntersectionObserver; 