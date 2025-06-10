interface NetworkStatus {
    online: boolean;
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
}
declare function useNetworkStatus(): NetworkStatus;
export default useNetworkStatus;
