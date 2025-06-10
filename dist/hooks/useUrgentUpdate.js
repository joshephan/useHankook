/**
 * useUrgentUpdate
 *
 * 즉각적인 업데이트를 위한 커스텀 훅
 * 상태 업데이트 함수를 저장하고 필요할 때 즉시 실행할 수 있습니다.
 *
 * A custom hook for immediate updates
 * Stores state update function and allows immediate execution when needed.
 */
import { useCallback, useRef } from 'react';
function useUrgentUpdate() {
    const updateRef = useRef(undefined);
    const setUpdate = useCallback((update) => {
        updateRef.current = update;
    }, []);
    const triggerUpdate = useCallback(() => {
        if (updateRef.current) {
            updateRef.current();
        }
    }, []);
    return {
        setUpdate,
        triggerUpdate
    };
}
export default useUrgentUpdate;
