/**
 * useUpdate
 *
 * 컴포넌트를 강제로 리렌더링하는 커스텀 훅
 * 내부 카운터를 증가시켜 컴포넌트의 리렌더링을 트리거합니다.
 *
 * A custom hook for forcing component re-render
 * Triggers component re-render by incrementing an internal counter.
 */
import { useCallback, useRef } from 'react';
function useUpdate() {
    const ref = useRef(0);
    const update = useCallback(() => {
        ref.current += 1;
    }, []);
    return update;
}
export default useUpdate;
