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

type MapOrEntries<K, V> = Map<K, V> | [K, V][];

interface UseMapActions<K, V> {
  set: (key: K, value: V) => void;
  setAll: (entries: MapOrEntries<K, V>) => void;
  remove: (key: K) => void;
  reset: () => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  clear: () => void;
}

function useMap<K, V>(initialState: MapOrEntries<K, V> = new Map()): [Map<K, V>, UseMapActions<K, V>] {
  const [map, setMap] = useState<Map<K, V>>(() => {
    if (initialState instanceof Map) {
      return new Map(initialState);
    }
    return new Map(initialState);
  });

  const actions: UseMapActions<K, V> = {
    set: useCallback((key: K, value: V) => {
      setMap(prev => {
        const next = new Map(prev);
        next.set(key, value);
        return next;
      });
    }, []),

    setAll: useCallback((entries: MapOrEntries<K, V>) => {
      setMap(() => {
        if (entries instanceof Map) {
          return new Map(entries);
        }
        return new Map(entries);
      });
    }, []),

    remove: useCallback((key: K) => {
      setMap(prev => {
        const next = new Map(prev);
        next.delete(key);
        return next;
      });
    }, []),

    reset: useCallback(() => {
      setMap(() => new Map());
    }, []),

    get: useCallback((key: K) => {
      return map.get(key);
    }, [map]),

    has: useCallback((key: K) => {
      return map.has(key);
    }, [map]),

    clear: useCallback(() => {
      setMap(() => new Map());
    }, [])
  };

  return [map, actions];
}

export default useMap; 