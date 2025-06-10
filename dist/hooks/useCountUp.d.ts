import { UseCountUpOptions } from '../types/countup';
declare function useCountUp({ start, end, duration, delay, onComplete }: UseCountUpOptions): {
    count: number;
    isRunning: boolean;
    startCountUp: () => void;
    reset: () => void;
};
export default useCountUp;
