/**
 * useInputValue
 *
 * 입력 필드의 값을 관리하는 커스텀 훅
 * 입력값의 상태 관리, 변경 이벤트 처리, 초기화 기능을 제공합니다.
 *
 * A custom hook for managing input field values
 * Provides state management, change event handling, and reset functionality for input values.
 */
import { useState, useCallback } from 'react';
function useInputValue(options = {}) {
    const { initialValue, transformer } = options;
    const [value, setValue] = useState(initialValue ?? '');
    const handleChange = useCallback((event) => {
        const newValue = event.target.value;
        setValue(transformer ? transformer(newValue) : newValue);
    }, [transformer]);
    const reset = useCallback(() => {
        setValue(initialValue ?? '');
    }, [initialValue]);
    return {
        value,
        setValue,
        handleChange,
        reset
    };
}
export default useInputValue;
