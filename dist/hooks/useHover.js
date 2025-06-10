/**
 * useHover
 *
 * 요소의 호버 상태를 관리하는 커스텀 훅
 * 마우스가 요소 위에 있는지 여부를 추적하고 상태를 반환합니다.
 *
 * A custom hook for managing element hover state
 * Tracks whether the mouse is over an element and returns its state.
 */
import { useState, useCallback, useRef } from 'react';
function useHover() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);
    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);
    const setRef = useCallback((node) => {
        if (ref.current && ref.current.nodeType === Node.ELEMENT_NODE) {
            ref.current.removeEventListener('mouseenter', handleMouseEnter);
            ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (node && node.nodeType === Node.ELEMENT_NODE) {
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);
        }
        ref.current = node;
    }, [handleMouseEnter, handleMouseLeave]);
    return [isHovered, setRef];
}
export default useHover;
