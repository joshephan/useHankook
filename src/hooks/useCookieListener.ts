/**
 * useCookieListener
 * 
 * 쿠키 변경 이벤트를 감지하는 커스텀 훅
 * 특정 쿠키의 값이 변경될 때 콜백 함수를 실행합니다.
 * 
 * A custom hook for detecting cookie change events
 * Executes a callback function when a specific cookie's value changes.
 */
import { useEffect } from 'react';

interface CookieChangeEvent extends Event {
  detail: {
    name: string;
    value: string;
    oldValue: string;
  };
}

function useCookieListener(
  callback: (event: CookieChangeEvent) => void,
  cookieName?: string
) {
  useEffect(() => {
    const handleCookieChange = (event: Event) => {
      const cookieEvent = event as CookieChangeEvent;
      if (!cookieName || cookieEvent.detail.name === cookieName) {
        callback(cookieEvent);
      }
    };

    document.addEventListener('cookieChange', handleCookieChange);

    return () => {
      document.removeEventListener('cookieChange', handleCookieChange);
    };
  }, [callback, cookieName]);
}

export default useCookieListener; 