/**
 * useClickOutside
 *
 * 요소 외부 클릭을 감지하는 커스텀 훅
 * 지정된 요소의 외부를 클릭했을 때 콜백 함수를 실행합니다.
 *
 * A custom hook for detecting clicks outside an element
 * Executes callback function when clicking outside the specified element.
 */
import { useEffect } from 'react';
function useClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
export default useClickOutside;
