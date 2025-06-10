/**
 * useCountdown
 * 
 * 카운트다운 타이머를 구현하는 커스텀 훅
 * 지정된 날짜까지 남은 시간을 일, 시간, 분, 초 단위로 계산하고 관리합니다.
 * 시작, 일시정지, 리셋 기능을 제공합니다.
 * 
 * A custom hook for implementing countdown timer
 * Calculates and manages remaining time in days, hours, minutes, and seconds until the target date.
 * Provides start, pause, and reset functionality.
 */
import { UseCountdownOptions } from '@/types/countdown';
import { useState, useEffect, useCallback } from 'react';


function useCountdown(
  targetDate: Date | number,
  options: UseCountdownOptions = {}
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
} {
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
    if (!isRunning) return;

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