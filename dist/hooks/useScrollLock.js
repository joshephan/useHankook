/**
 * useScrollLock
 *
 * 스크롤을 잠그는 커스텀 훅
 * 모달이나 팝업이 열렸을 때 배경 스크롤을 방지하고 스크롤바 너비를 보정합니다.
 *
 * A custom hook for locking scroll
 * Prevents background scrolling and compensates for scrollbar width when modal or popup is open.
 */
import { useEffect } from 'react';
function useScrollLock(lock) {
    useEffect(() => {
        if (lock) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            return () => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            };
        }
    }, [lock]);
}
export default useScrollLock;
