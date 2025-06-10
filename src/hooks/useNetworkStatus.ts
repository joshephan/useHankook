/**
 * useNetworkStatus
 * 
 * 네트워크 상태를 모니터링하는 커스텀 훅
 * 온라인/오프라인 상태, 네트워크 타입, 속도 등의 정보를 제공합니다.
 * 
 * A custom hook for monitoring network status
 * Provides information about online/offline state, network type, speed, etc.
 */
import { useState, useEffect } from 'react';

interface NetworkStatus {
  online: boolean;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    online: typeof navigator !== 'undefined' ? navigator.onLine : true,
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      setStatus({
        online: navigator.onLine,
        effectiveType: (navigator as any).connection?.effectiveType,
        downlink: (navigator as any).connection?.downlink,
        rtt: (navigator as any).connection?.rtt,
        saveData: (navigator as any).connection?.saveData,
      });
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', updateNetworkStatus);
    }

    updateNetworkStatus();

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);

  return status;
}

export default useNetworkStatus; 