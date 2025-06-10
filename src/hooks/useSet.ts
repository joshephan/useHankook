/**
 * useSet
 * 
 * Set 자료구조를 React 상태로 관리하는 커스텀 훅
 * Set의 기본 연산(add, remove, clear 등)을 상태 관리와 함께 제공합니다.
 * 
 * A custom hook for managing Set data structure as React state
 * Provides basic Set operations (add, remove, clear, etc.) with state management.
 */
import { useState, useCallback } from 'react';

type SetOrEntries<T> = Set<T> | T[];

interface UseSetActions<T> {
  add: (value: T) => void;
  remove: (value: T) => void;
  clear: () => void;
  reset: () => void;
  has: (value: T) => boolean;
}

function useSet<T>(initialState: SetOrEntries<T> = new Set()): [Set<T>, UseSetActions<T>] {
  const [set, setSet] = useState<Set<T>>(() => {
    if (initialState instanceof Set) {
      return new Set(initialState);
    }
    return new Set(initialState);
  });

  const actions: UseSetActions<T> = {
    add: useCallback((value: T) => {
      setSet(prev => {
        const next = new Set(prev);
        next.add(value);
        return next;
      });
    }, []),

    remove: useCallback((value: T) => {
      setSet(prev => {
        const next = new Set(prev);
        next.delete(value);
        return next;
      });
    }, []),

    clear: useCallback(() => {
      setSet(() => new Set());
    }, []),

    reset: useCallback(() => {
      setSet(() => {
        if (initialState instanceof Set) {
          return new Set(initialState);
        }
        return new Set(initialState);
      });
    }, [initialState]),

    has: useCallback((value: T) => {
      return set.has(value);
    }, [set])
  };

  return [set, actions];
}

export default useSet; 