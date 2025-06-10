/**
 * useOnClickOutside
 *
 * 요소 외부 클릭을 감지하는 커스텀 훅
 * 지정된 요소의 영역 밖을 클릭했을 때 콜백 함수를 실행합니다.
 *
 * A custom hook for detecting clicks outside an element
 * Executes a callback function when clicking outside the specified element's area.
 */
import { RefObject } from 'react';
type Event = MouseEvent | TouchEvent;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void, mouseEvent?: 'mousedown' | 'mouseup'): void;
export default useOnClickOutside;
