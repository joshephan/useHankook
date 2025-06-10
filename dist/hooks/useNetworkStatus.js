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
function useNetworkStatus() {
    const [status, setStatus] = useState({
        online: typeof navigator !== 'undefined' ? navigator.onLine : true,
    });
    useEffect(() => {
        const updateNetworkStatus = () => {
            setStatus({
                online: navigator.onLine,
                effectiveType: navigator.connection?.effectiveType,
                downlink: navigator.connection?.downlink,
                rtt: navigator.connection?.rtt,
                saveData: navigator.connection?.saveData,
            });
        };
        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);
        if (navigator.connection) {
            navigator.connection.addEventListener('change', updateNetworkStatus);
        }
        updateNetworkStatus();
        return () => {
            window.removeEventListener('online', updateNetworkStatus);
            window.removeEventListener('offline', updateNetworkStatus);
            if (navigator.connection) {
                navigator.connection.removeEventListener('change', updateNetworkStatus);
            }
        };
    }, []);
    return status;
}
export default useNetworkStatus;
