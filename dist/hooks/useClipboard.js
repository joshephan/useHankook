/**
 * useClipboard
 *
 * 클립보드 기능을 사용하기 위한 커스텀 훅
 * 텍스트를 클립보드에 복사하고 복사 성공/실패 상태를 관리합니다.
 *
 * A custom hook for clipboard functionality
 * Copies text to clipboard and manages copy success/failure states.
 */
import { useState, useCallback } from 'react';
function useClipboard(options = {}) {
    const { successDuration = 2000 } = options;
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(null);
    const copy = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setError(null);
            setTimeout(() => setCopied(false), successDuration);
        }
        catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to copy text'));
            setCopied(false);
        }
    }, [successDuration]);
    const reset = useCallback(() => {
        setCopied(false);
        setError(null);
    }, []);
    return { copy, reset, error, copied };
}
export default useClipboard;
