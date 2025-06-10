declare function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number): (...args: Parameters<T>) => void;
export default useThrottle;
