/**
 * useScript
 * 
 * 외부 스크립트를 동적으로 로드하는 커스텀 훅
 * 스크립트의 로딩 상태와 에러를 관리하며, 컴포넌트 언마운트 시 자동으로 제거됩니다.
 * 
 * A custom hook for dynamically loading external scripts
 * Manages script loading state and errors, automatically removes on component unmount.
 */
import { useState, useEffect } from 'react';

interface UseScriptOptions {
  async?: boolean;
  defer?: boolean;
  crossOrigin?: string;
  integrity?: string;
}

interface UseScriptState {
  loading: boolean;
  error: Error | null;
}

function useScript(src: string, options: UseScriptOptions = {}): UseScriptState {
  const [state, setState] = useState<UseScriptState>({
    loading: true,
    error: null
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = options.async ?? true;
    script.defer = options.defer ?? false;
    if (options.crossOrigin) script.crossOrigin = options.crossOrigin;
    if (options.integrity) script.integrity = options.integrity;

    const handleLoad = () => {
      setState({
        loading: false,
        error: null
      });
    };

    const handleError = (error: Error) => {
      setState({
        loading: false,
        error
      });
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError as unknown as EventListener);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError as unknown as EventListener);
      document.body.removeChild(script);
    };
  }, [src, options]);

  return state;
}

export default useScript; 