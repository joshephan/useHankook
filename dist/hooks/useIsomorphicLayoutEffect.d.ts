/**
 * useIsomorphicLayoutEffect
 *
 * 서버사이드 렌더링을 지원하는 레이아웃 이펙트 훅
 * 브라우저 환경에서는 useLayoutEffect를, 서버 환경에서는 useEffect를 사용합니다.
 *
 * A layout effect hook that supports server-side rendering
 * Uses useLayoutEffect in browser environment and useEffect in server environment.
 */
import { useEffect } from 'react';
declare const useIsomorphicLayoutEffect: typeof useEffect;
export default useIsomorphicLayoutEffect;
