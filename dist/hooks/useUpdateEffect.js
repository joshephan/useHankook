/**
 * useUpdateEffect
 *
 * 첫 렌더링을 제외한 업데이트에서만 실행되는 useEffect 커스텀 훅
 * 컴포넌트의 첫 마운트 시에는 effect를 실행하지 않습니다.
 *
 * A custom hook that runs useEffect only on updates, not on first render
 * Skips effect execution on component's first mount.
 */
import { useEffect, useRef } from 'react';
function useUpdateEffect(effect, deps) {
    const isFirstMount = useRef(true);
    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false;
            return;
        }
        return effect();
    }, deps);
}
export default useUpdateEffect;
