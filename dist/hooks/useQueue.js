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
function useQueue(initialState = []) {
    const [items, setItems] = useState(initialState);
    const add = useCallback((item) => {
        setItems(prev => [...prev, item]);
    }, []);
    const remove = useCallback(() => {
        let result;
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
