/**
 * useLocalStorage
 *
 * localStorage를 React 상태로 관리하는 커스텀 훅
 * 데이터의 영구 저장과 상태 관리를 동시에 제공합니다.
 *
 * A custom hook for managing localStorage as React state
 * Provides both persistent storage and state management.
 */
import { useState, useEffect } from 'react';
function useLocalStorage(key, initialValue, options = {}) {
    const { serializer = JSON.stringify, deserializer = JSON.parse } = options;
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? deserializer(item) : initialValue;
        }
        catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });
    useEffect(() => {
        try {
            window.localStorage.setItem(key, serializer(storedValue));
        }
        catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }, [key, storedValue, serializer]);
    return [storedValue, setStoredValue];
}
export default useLocalStorage;
