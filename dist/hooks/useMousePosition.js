/**
 * useMousePosition
 *
 * 마우스 커서의 위치를 추적하는 커스텀 훅
 * 화면 내에서의 마우스 좌표를 실시간으로 제공합니다.
 *
 * A custom hook for tracking mouse cursor position
 * Provides real-time mouse coordinates within the screen.
 */
import { useState, useEffect } from 'react';
function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return position;
}
export default useMousePosition;
