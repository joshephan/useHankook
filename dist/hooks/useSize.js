/**
 * useSize
 *
 * 요소의 크기를 감지하는 커스텀 훅
 * ResizeObserver를 사용하여 요소의 크기 변화를 실시간으로 추적합니다.
 *
 * A custom hook for detecting element size
 * Uses ResizeObserver to track element size changes in real-time.
 */
import { useState, useEffect } from 'react';
function useSize(ref) {
    const [size, setSize] = useState({
        width: 0,
        height: 0
    });
    useEffect(() => {
        if (!ref.current)
            return;
        const element = ref.current;
        const resizeObserver = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            setSize({ width, height });
        });
        resizeObserver.observe(element);
        return () => {
            resizeObserver.unobserve(element);
        };
    }, [ref]);
    return size;
}
export default useSize;
