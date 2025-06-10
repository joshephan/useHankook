/**
 * useEventListner
 * 
 * 이벤트 리스너를 관리하는 커스텀 훅
 * Window, Document, HTMLElement 등 다양한 타겟에 이벤트 리스너를 추가하고 제거합니다.
 * 
 * A custom hook for managing event listeners
 * Adds and removes event listeners to various targets including Window, Document, and HTMLElement.
 */
import { useEffect, useRef } from 'react';

type EventTarget = Window | Document | HTMLElement;

function useEventListner<T extends Event>(
  eventName: string,
  handler: (event: T) => void,
  element: EventTarget = window,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current(event as T);
    element.addEventListener(eventName, eventListener, options);

    return () => {
      element.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
}

export default useEventListner; 