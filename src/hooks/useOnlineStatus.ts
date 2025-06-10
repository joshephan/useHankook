/**
 * useOnlineStatus
 * 
 * 온라인 상태를 감지하는 커스텀 훅
 * 네트워크 연결 상태의 변화를 실시간으로 모니터링합니다.
 * 
 * A custom hook for detecting online status
 * Monitors network connection state changes in real-time.
 */
import { useState, useEffect } from 'react';

function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus; 