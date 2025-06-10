/**
 * useMap
 *
 * Map 자료구조를 React 상태로 관리하는 커스텀 훅
 * Map의 모든 기본 동작과 추가 기능을 제공합니다.
 *
 * A custom hook for managing Map data structure as React state
 * Provides all basic Map operations and additional functionality.
 */
import { useState, useCallback } from 'react';
function useMap(initialState = new Map()) {
    const [map, setMap] = useState(() => {
        if (initialState instanceof Map) {
            return new Map(initialState);
        }
        return new Map(initialState);
    });
    const actions = {
        set: useCallback((key, value) => {
            setMap(prev => {
                const next = new Map(prev);
                next.set(key, value);
                return next;
            });
        }, []),
        setAll: useCallback((entries) => {
            setMap(() => {
                if (entries instanceof Map) {
                    return new Map(entries);
                }
                return new Map(entries);
            });
        }, []),
        remove: useCallback((key) => {
            setMap(prev => {
                const next = new Map(prev);
                next.delete(key);
                return next;
            });
        }, []),
        reset: useCallback(() => {
            setMap(() => new Map());
        }, []),
        get: useCallback((key) => {
            return map.get(key);
        }, [map]),
        has: useCallback((key) => {
            return map.has(key);
        }, [map]),
        clear: useCallback(() => {
            setMap(() => new Map());
        }, [])
    };
    return [map, actions];
}
export default useMap;
