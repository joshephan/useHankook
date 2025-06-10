import { useState, useEffect, useCallback } from 'react';
function useCountdown(targetDate, options = {}) {
    const { interval = 1000, onEnd } = options;
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [isEnded, setIsEnded] = useState(false);
    const calculateTimeLeft = useCallback(() => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        return Math.max(0, difference);
    }, [targetDate]);
    const start = useCallback(() => {
        setIsRunning(true);
        setIsEnded(false);
    }, []);
    const pause = useCallback(() => {
        setIsRunning(false);
    }, []);
    const reset = useCallback(() => {
        setTimeLeft(calculateTimeLeft());
        setIsRunning(true);
        setIsEnded(false);
    }, [calculateTimeLeft]);
    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
    }, [calculateTimeLeft]);
    useEffect(() => {
        if (!isRunning)
            return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const newTimeLeft = prev - interval;
                if (newTimeLeft <= 0) {
                    clearInterval(timer);
                    setIsRunning(false);
                    setIsEnded(true);
                    onEnd?.();
                    return 0;
                }
                return newTimeLeft;
            });
        }, interval);
        return () => clearInterval(timer);
    }, [isRunning, interval, onEnd]);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds,
        isEnded,
        start,
        pause,
        reset,
    };
}
export default useCountdown;
