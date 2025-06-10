/**
 * usePreventBodyScroll
 *
 * body 스크롤을 제어하는 커스텀 훅
 * 모달이나 팝업이 열렸을 때 배경 스크롤을 방지하고, 닫힐 때 원래 상태로 복원합니다.
 *
 * A custom hook for controlling body scroll
 * Prevents background scrolling when modal or popup is open and restores original state when closed.
 */
import { useEffect } from 'react';
function usePreventBodyScroll(preventScroll) {
    useEffect(() => {
        if (preventScroll) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [preventScroll]);
}
export default usePreventBodyScroll;
