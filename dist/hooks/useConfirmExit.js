/**
 * useConfirmExit
 *
 * 페이지 이탈 시 확인 대화상자를 표시하는 커스텀 훅
 * 사용자가 실수로 페이지를 나가는 것을 방지합니다.
 *
 * A custom hook for showing confirmation dialog when leaving the page
 * Prevents users from accidentally leaving the page.
 */
import { useEffect } from 'react';
function useConfirmExit(options = {}) {
    const { message = '정말로 페이지를 나가시겠습니까?', enabled = true } = options;
    useEffect(() => {
        if (!enabled)
            return;
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = message;
            return message;
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [message, enabled]);
}
export default useConfirmExit;
