/**
 * useWindowSize
 * 
 * 윈도우 크기를 추적하는 커스텀 훅
 * 윈도우의 너비와 높이를 실시간으로 감지하고 반응형 디자인에 활용할 수 있습니다.
 * 
 * A custom hook for tracking window size
 * Detects window width and height in real-time and can be used for responsive design.
 */
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}

export default useWindowSize; 