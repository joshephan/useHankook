/**
 * useInputValue
 *
 * 입력 필드의 값을 관리하는 커스텀 훅
 * 입력값의 상태 관리, 변경 이벤트 처리, 초기화 기능을 제공합니다.
 *
 * A custom hook for managing input field values
 * Provides state management, change event handling, and reset functionality for input values.
 */
import { ChangeEvent } from 'react';
interface UseInputValueOptions<T> {
    initialValue?: T;
    transformer?: (value: string) => T;
}
declare function useInputValue<T = string>(options?: UseInputValueOptions<T>): {
    value: "" | T;
    setValue: import("react").Dispatch<import("react").SetStateAction<"" | T>>;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    reset: () => void;
};
export default useInputValue;
