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
function useSessionStorage(key, initialValue, options = {}) {
    const { serializer = JSON.stringify, deserializer = JSON.parse } = options;
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.sessionStorage.getItem(key);
            return item ? deserializer(item) : initialValue;
        }
        catch (error) {
            console.error('Error reading from sessionStorage:', error);
            return initialValue;
        }
    });
    useEffect(() => {
        try {
            window.sessionStorage.setItem(key, serializer(storedValue));
        }
        catch (error) {
            console.error('Error writing to sessionStorage:', error);
        }
    }, [key, storedValue, serializer]);
    return [storedValue, setStoredValue];
}
export default useSessionStorage;
