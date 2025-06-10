/**
 * useKeyPress
 *
 * 키보드 입력을 감지하는 커스텀 훅
 * 특정 키나 키 조합의 눌림 상태를 추적하고 반환합니다.
 *
 * A custom hook for detecting keyboard input
 * Tracks and returns the pressed state of specific keys or key combinations.
 */
import { useState, useEffect } from 'react';
function useKeyPress(keyFilter, options = {}) {
    const [pressed, setPressed] = useState(false);
    const { target = window, event = 'keydown' } = options;
    useEffect(() => {
        const isKeyMatching = (event) => {
            if (typeof keyFilter === 'function') {
                return keyFilter(event);
            }
            if (Array.isArray(keyFilter)) {
                return keyFilter.includes(event.key);
            }
            return event.key === keyFilter;
        };
        const downHandler = (event) => {
            if (isKeyMatching(event)) {
                setPressed(true);
            }
        };
        const upHandler = (event) => {
            if (isKeyMatching(event)) {
                setPressed(false);
            }
        };
        target.addEventListener(event, downHandler);
        target.addEventListener('keyup', upHandler);
        return () => {
            target.removeEventListener(event, downHandler);
            target.removeEventListener('keyup', upHandler);
        };
    }, [keyFilter, target, event]);
    return pressed;
}
export default useKeyPress;
