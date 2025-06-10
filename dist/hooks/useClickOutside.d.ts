/**
 * useClickOutside
 *
 * 요소 외부 클릭을 감지하는 커스텀 훅
 * 지정된 요소의 외부를 클릭했을 때 콜백 함수를 실행합니다.
 *
 * A custom hook for detecting clicks outside an element
 * Executes callback function when clicking outside the specified element.
 */
import { RefObject } from 'react';
declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void): void;
export default useClickOutside;
