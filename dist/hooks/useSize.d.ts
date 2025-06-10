/**
 * useSize
 *
 * 요소의 크기를 감지하는 커스텀 훅
 * ResizeObserver를 사용하여 요소의 크기 변화를 실시간으로 추적합니다.
 *
 * A custom hook for detecting element size
 * Uses ResizeObserver to track element size changes in real-time.
 */
import { RefObject } from 'react';
interface Size {
    width: number;
    height: number;
}
declare function useSize<T extends HTMLElement>(ref: RefObject<T>): Size;
export default useSize;
