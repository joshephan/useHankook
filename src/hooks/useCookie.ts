/**
 * useCookie
 * 
 * 쿠키를 관리하기 위한 커스텀 훅
 * 쿠키의 읽기, 설정, 삭제 기능을 제공합니다.
 * 
 * A custom hook for managing cookies
 * Provides functionality to read, set, and delete cookies.
 */
import { useState, useCallback } from 'react';
import { CookieOptions } from '../types/cookie';

function useCookie(key: string, initialValue: string = '') {
  const [value, setValue] = useState<string>(() => {
    if (typeof document === 'undefined') return initialValue;
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.trim().startsWith(`${key}=`));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : initialValue;
  });

  const setCookie = useCallback((newValue: string, options: CookieOptions = {}) => {
    const { expires, path = '/', domain, secure, sameSite = 'lax' } = options;
    let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(newValue)}`;

    if (expires) {
      const date = expires instanceof Date ? expires : new Date(Date.now() + expires * 1000);
      cookie += `; expires=${date.toUTCString()}`;
    }

    cookie += `; path=${path}`;
    if (domain) cookie += `; domain=${domain}`;
    if (secure) cookie += '; secure';
    cookie += `; samesite=${sameSite}`;

    document.cookie = cookie;
    setValue(newValue);
  }, [key]);

  const removeCookie = useCallback(() => {
    document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    setValue('');
  }, [key]);

  return [value, setCookie, removeCookie] as const;
}

export default useCookie; 