/**
 * useTitle
 * 
 * 문서 제목을 관리하는 커스텀 훅
 * 페이지의 제목을 동적으로 변경하고, 컴포넌트 언마운트 시 원래 제목으로 복원할 수 있습니다.
 * 
 * A custom hook for managing document title
 * Dynamically changes page title and can restore original title on component unmount.
 */
import { useEffect } from 'react';

interface UseTitleOptions {
  restoreOnUnmount?: boolean;
}

function useTitle(title: string, options: UseTitleOptions = {}) {
  const { restoreOnUnmount = false } = options;
  const defaultTitle = typeof document !== 'undefined' ? document.title : '';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }

    return () => {
      if (restoreOnUnmount && typeof document !== 'undefined') {
        document.title = defaultTitle;
      }
    };
  }, [title, restoreOnUnmount, defaultTitle]);
}

export default useTitle; 