/**
 * useToggle
 * 
 * 불리언 값을 토글하는 커스텀 훅
 * 상태의 켜짐/꺼짐을 쉽게 전환할 수 있게 해줍니다.
 * 
 * A custom hook for toggling boolean values
 * Provides easy switching between on/off states.
 */
import { useState, useCallback } from 'react';

type ToggleValue = boolean | ((prev: boolean) => boolean);

function useToggle(initialValue: boolean = false): [boolean, (value?: ToggleValue) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback((newValue?: ToggleValue) => {
    if (typeof newValue === 'boolean') {
      setValue(newValue);
    } else if (typeof newValue === 'function') {
      setValue(newValue);
    } else {
      setValue(prev => !prev);
    }
  }, []);

  return [value, toggle];
}

export default useToggle; 