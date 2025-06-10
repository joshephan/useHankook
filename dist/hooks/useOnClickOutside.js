/**
 * useOnClickOutside
 *
 * 요소 외부 클릭을 감지하는 커스텀 훅
 * 지정된 요소의 영역 밖을 클릭했을 때 콜백 함수를 실행합니다.
 *
 * A custom hook for detecting clicks outside an element
 * Executes a callback function when clicking outside the specified element's area.
 */
import { useEffect } from 'react';
function useOnClickOutside(ref, handler, mouseEvent = 'mousedown') {
    useEffect(() => {
        const listener = (event) => {
            const el = ref?.current;
            if (!el || el.contains(event?.target || null)) {
                return;
            }
            handler(event);
        };
        document.addEventListener(mouseEvent, listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener(mouseEvent, listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, mouseEvent]);
}
export default useOnClickOutside;
