/**
 * useQueue
 * 
 * 큐 자료구조를 구현한 커스텀 훅
 * FIFO(First In First Out) 방식의 데이터 관리를 제공합니다.
 * 
 * A custom hook implementing queue data structure
 * Provides FIFO (First In First Out) data management.
 */
import { useState, useCallback } from 'react';

interface Queue<T> {
  items: T[];
  add: (item: T) => void;
  remove: () => T | undefined;
  clear: () => void;
  first: T | undefined;
  last: T | undefined;
  size: number;
}

function useQueue<T>(initialState: T[] = []): Queue<T> {
  const [items, setItems] = useState<T[]>(initialState);

  const add = useCallback((item: T) => {
    setItems(prev => [...prev, item]);
  }, []);

  const remove = useCallback(() => {
    let result: T | undefined;
    setItems(prev => {
      const [first, ...rest] = prev;
      result = first;
      return rest;
    });
    return result;
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  return {
    items,
    add,
    remove,
    clear,
    get first() {
      return items[0];
    },
    get last() {
      return items[items.length - 1];
    },
    get size() {
      return items.length;
    }
  };
}

export default useQueue; 