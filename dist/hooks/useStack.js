/**
 * useStack
 *
 * 스택 자료구조를 구현한 커스텀 훅
 * LIFO(Last In First Out) 방식의 데이터 관리를 제공합니다.
 *
 * A custom hook implementing stack data structure
 * Provides LIFO (Last In First Out) data management.
 */
import { useState, useCallback } from 'react';
function useStack(initialState = []) {
    const [items, setItems] = useState(initialState);
    const push = useCallback((item) => {
        setItems(prev => [...prev, item]);
    }, []);
    const pop = useCallback(() => {
        let result;
        setItems(prev => {
            const newItems = [...prev];
            result = newItems.pop();
            return newItems;
        });
        return result;
    }, []);
    const peek = useCallback(() => {
        return items[items.length - 1];
    }, [items]);
    const clear = useCallback(() => {
        setItems([]);
    }, []);
    return {
        items,
        push,
        pop,
        peek,
        clear,
        get size() {
            return items.length;
        }
    };
}
export default useStack;
