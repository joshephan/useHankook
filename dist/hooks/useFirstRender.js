/**
 * useFirstRender
 *
 * 컴포넌트의 첫 렌더링 여부를 확인하는 커스텀 훅
 * 컴포넌트가 처음 마운트될 때만 true를 반환합니다.
 *
 * A custom hook for checking if it's the first render of a component
 * Returns true only when the component is first mounted.
 */
import { useRef, useEffect } from 'react';
function useFirstRender() {
    const isFirst = useRef(true);
    useEffect(() => {
        isFirst.current = false;
    }, []);
    return isFirst.current;
}
export default useFirstRender;
