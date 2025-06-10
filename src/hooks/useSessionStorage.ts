/**
 * useSessionStorage
 * 
 * sessionStorage를 React 상태로 관리하는 커스텀 훅
 * 세션 스토리지의 값을 상태로 관리하고, 상태 변경 시 자동으로 저장합니다.
 * 
 * A custom hook for managing sessionStorage as React state
 * Manages sessionStorage values as state and automatically saves on state changes.
 */
import { useState, useEffect } from 'react';

interface UseSessionStorageOptions<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

function useSessionStorage<T>(
  key: string,
  initialValue: T,
  options: UseSessionStorageOptions<T> = {}
) {
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse
  } = options;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? deserializer(item) : initialValue;
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, serializer(storedValue));
    } catch (error) {
      console.error('Error writing to sessionStorage:', error);
    }
  }, [key, storedValue, serializer]);

  return [storedValue, setStoredValue] as const;
}

export default useSessionStorage; 