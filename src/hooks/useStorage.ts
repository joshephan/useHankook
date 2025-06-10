/**
 * useStorage
 * 
 * localStorage와 sessionStorage를 통합 관리하는 커스텀 훅
 * 두 스토리지 타입을 선택적으로 사용할 수 있으며, 상태 변경 시 자동으로 저장됩니다.
 * 
 * A custom hook for unified management of localStorage and sessionStorage
 * Allows selective use of both storage types and automatically saves on state changes.
 */
import { useState, useEffect } from 'react';

type StorageType = 'local' | 'session';

interface UseStorageOptions<T> {
  type?: StorageType;
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

function useStorage<T>(
  key: string,
  initialValue: T,
  options: UseStorageOptions<T> = {}
) {
  const {
    type = 'local',
    serializer = JSON.stringify,
    deserializer = JSON.parse
  } = options;

  const storage = type === 'local' ? window.localStorage : window.sessionStorage;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? deserializer(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from ${type}Storage:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, serializer(storedValue));
    } catch (error) {
      console.error(`Error writing to ${type}Storage:`, error);
    }
  }, [key, storedValue, storage, serializer]);

  return [storedValue, setStoredValue] as const;
}

export default useStorage; 