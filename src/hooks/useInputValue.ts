/**
 * useInputValue
 * 
 * 입력 필드의 값을 관리하는 커스텀 훅
 * 입력값의 상태 관리, 변경 이벤트 처리, 초기화 기능을 제공합니다.
 * 
 * A custom hook for managing input field values
 * Provides state management, change event handling, and reset functionality for input values.
 */
import { useState, useCallback, ChangeEvent } from 'react';

interface UseInputValueOptions<T> {
  initialValue?: T;
  transformer?: (value: string) => T;
}

function useInputValue<T = string>(options: UseInputValueOptions<T> = {}) {
  const { initialValue, transformer } = options;
  const [value, setValue] = useState<T | ''>(initialValue ?? '');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(transformer ? transformer(newValue) : newValue as T);
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