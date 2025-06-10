/**
 * useOrientation
 *
 * 화면 방향(orientation)을 감지하는 커스텀 훅
 * Screen Orientation API를 사용하여 디바이스의 현재 방향과 각도를 추적합니다.
 *
 * A custom hook for detecting screen orientation
 * Uses Screen Orientation API to track device's current orientation and angle.
 */
import { useState, useEffect } from 'react';
const useOrientation = () => {
    const [orientation, setOrientation] = useState({
        angle: 0,
        type: 'natural',
        supported: false
    });
    useEffect(() => {
        if (!window.screen?.orientation) {
            console.warn('Screen Orientation API is not supported in this browser');
            return;
        }
        const updateOrientation = () => {
            const { angle, type } = window.screen.orientation;
            setOrientation({
                angle,
                type: type,
                supported: true
            });
        };
        updateOrientation();
        window.screen.orientation.addEventListener('change', updateOrientation);
        return () => {
            window.screen.orientation.removeEventListener('change', updateOrientation);
        };
    }, []);
    return orientation;
};
export default useOrientation;
